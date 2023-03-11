import React, { useEffect, useRef, useState } from 'react'

function InfiniteScrollPage() {
  const [imageURLs, setImageURLs] = useState<string[]>([""]);  // 이미지의 URL을 담을 state 변수
  const [isLoading, setIsLoading] = useState(false);  // 현재 로딩중이면 true, 그렇지 않다면 false
  const isLoadingRef = useRef(isLoading);
  const lastDivRef = useRef(null);  // 마지막 div 태그를 참조할 ref 객체

  const addImageURL = async () => {
    // 로딩중 상태로 변경
    setIsLoading(() => {
      console.log("로딩 시작...");
      isLoadingRef.current = true;
      return true;
    });

    // 이미지 요청
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageURL = data.message;

    // 요청 완료되었으므로 false로 세팅
    setIsLoading(() => {
      console.log("로딩 끝!", imageURL);
      isLoadingRef.current = false;
      return false;
    });
    
    // 이미지 URL 추가하기
    setImageURLs((oldState) => {
      return [...oldState, imageURL]
    })
  }

  useEffect(() => {
    // 트리거 될 때의 콜백 함수 정의
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && isLoadingRef.current === false) {  // 현재 로딩중인 상태에서도 마지막에 도달할 수 있으므로 로딩중이지 않을 경우(=isLoading이 false)인 경우에만 요청을 보내야 한다
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