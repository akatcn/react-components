// callback 함수 내에서 isLoading의 변화를 전혀 감지해내지 못하고 있다. 아마 콜백함수의 특성상 값을 capturing하는 동작때문에 그런 것 같다. 이를 해결할 수 있어야 한다

import React, { useEffect, useRef, useState } from 'react'

function InfiniteScrollPage() {
  const [imageURLs, setImageURLs] = useState<string[]>([""]);  // 이미지의 URL을 담을 state 변수
  const [isLoading, setIsLoading] = useState(false);  // 현재 로딩중이면 true, 그렇지 않다면 false
  const [num, setNum] = useState(0);
  const lastDivRef = useRef(null);  // 마지막 div 태그를 참조할 ref 객체

  const addImageURL = async () => {
    // setNum은 정상 동작하여 num++을 하게된다
    setNum((oldState) => {
      return oldState + 1;
    });
    console.log("요청함...", num);  // 여기도 항상 0으로 찍힌다
    
    setIsLoading(true);  // 로딩중 상태로 변경
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageURL = data.message;
    // console.log("로드할 이미지의 URL:", imageURL);
    setIsLoading(false);  // 로딩 완료되었으므로 false로 세팅
    
    setImageURLs((oldState) => {
      return [...oldState, imageURL]
    })
  }

  useEffect(() => {
    // 트리거 될 때의 콜백 함수
    const callback = (entries: IntersectionObserverEntry[]) => {
      console.log("callback's number:", num);  // 왜 여기가 항상 0으로 찍힐까?? 아마 콜백 호출을 함에 따라 값이 capturing 되는 것 같다
      entries.forEach(entry => {
        if (entry.isIntersecting && isLoading === false) {  // 현재 로딩중인 상태에서도 마지막에 도달할 수 있으므로 로딩중이지 않을 경우(=isLoading이 false)인 경우에만 요청을 보내야 한다
          addImageURL();
        }
      })
    }
    if (lastDivRef?.current) {  // 마지막 div를 참조할 수 있을 때에만 관찰을 시작한다
      const observer = new IntersectionObserver(callback, {threshold: 1});  // 마지막 div가 전부 보일 때에만 끝에 도달한 것으로 생각해야 한다
      observer.observe(lastDivRef.current);  // 마지막 div에 대한 관찰 시작
    }
  }, [])

  return (
    <div>
      <button className="bg-red-300" onClick={() => alert(num)}>클릭</button> {/* num을 확인하기 위한 더미 버튼 */}
      {imageURLs.map((imageURL: string, index) => {
        if (index === imageURLs.length-1) {
          return <img key={index} className="border-4 border-red-500" src={imageURL} />  // 마지막 이미지에는 빨간 테두리를 붙여준다
        }
        return <img key={index} src={imageURL} />
      })}
      {isLoading ? <div>Loading Spinner...</div> : <div className="h-14" ref={lastDivRef}></div>}
    </div>
  )
}

export default InfiniteScrollPage