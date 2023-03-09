import React, { useEffect, useRef } from 'react'

function IntersectionObserverPage() {
  const targets = useRef<HTMLElement[]>([]);  // 참조할 엘리먼트들을 담을 배열
  
  useEffect(() => {
    // console.log(targets.current);
    // 콜백 함수 정의
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {  // 감시되는 엘리먼트가 교차될 때의 동작 정의
          // console.log("보여집니다!!");
        } else {  // 감시되는 엘리먼트가 교차되지 않을 때의 동작 정의
          // console.log("안보여집니다...");
        }
      })
    }

    // ref 배열에 비어있는 값이 아닌 경우에만 observer에 등록한다
    if (targets?.current && targets.current.length > 0) {
      const observer = new IntersectionObserver(callback);  // observer 객체 생성
      targets.current.forEach(el => observer.observe(el));  // ref 배열을 조회하며 감시 대상에 추가한다
    }
  }, [])

  // 엘리먼트를 받아 ref배열에 추가하는 함수
  const addToTargets = (el: HTMLElement) => {
    targets.current.push(el)
  }
  return (
    <div>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p ref={el => addToTargets(el as HTMLElement)}>티코 안녕!1</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <div ref={(el: HTMLDivElement) => addToTargets(el)}>티코 안녕!2</div>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
      <p>티코 안녕!</p>
    </div>
  )
}

export default IntersectionObserverPage