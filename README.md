<img src="https://capsule-render.vercel.app/api?type=waving&color=dfbcf7&height=200&section=header&text=TEMFLIX&fontSize=50&fontColor=FFFFFF" />

# 💻 Project Introduction

### THE MOVIE DATABASE(TMDB) API를 활용한 Movie Trailer WebSite
</br>


# 📑 Tech Stack 
  
<div align="left">
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
</div>
<div align="left">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=Axios&logoColor=white" />
  <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=React Query&logoColor=white" />
  <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white" />
  <img src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white" />
  <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white" />
</div>
</br>

# 🚀 Depoly 

### [TEMFLIX](https://movie-trailer-mu.vercel.app/)  
</br>

# 🔎 Preview

### 🎬 HomePage
https://github.com/HeesikK/Movie-Trailer/assets/127207625/896b6f54-19fb-4102-99d1-c640253b3755

</br>

### 🎬 DetailPage
https://github.com/HeesikK/Movie-Trailer/assets/127207625/0bdf755a-3657-46ac-9e31-d835878e48ad

</br>

### 🎬 SearchPage
https://github.com/HeesikK/Movie-Trailer/assets/127207625/cb7c85ab-cb4c-4e1c-a1b3-6ad903868295

</br>

# 📆 Develop Date 
### Develop: 2023.10.16 ~ 2023.10.23

| Date | Content |
| ------------ | ------------- |
| 10/16 | 폴더 구조, 초기 셋팅(router 설정, 공용 css 정의)  |
| 10/17 | Home Page 구현, Detail Page 윤곽 잡기  |
| 10/18 | Detail Page Css 적용, 검색 기능 구현, Scroll Top 이벤트 구현  |
| 10/19 | Home Page filter 구현(now-playing ,popular, top-rated, upcoming)  |
| 10/20 | Infinity Scroll 구현, Home Page banner 구현  |
| 10/21 | Home Page Skeleton UI 구현  |
| 10/22 | 폴더 구조 정리(index.js에는 컴포넌트만!), Css 수정  |
| 10/23 | README.md 작성  |
</br>

### Refactor: 2023.10.25 ~ 2023.10.26
#### 💡 리팩토링 내용
+ Skeleton UI 수정 </br>
	+ 초기 스켈레톤 UI는 isFetching 값이 true이면 스켈레톤 UI를 보여주는 형식으로 제작하였으나 이 경우에 데이터가 fetching 될 때 모든 데이터가 스켈레톤 UI를 랜더하는 문제가 발생하였다. </br>
	+ 이 문제를 개선하기 스켈레톤 UI를 따로 제작하여 기존 데이터 아래 추가함으로써 isFetching 이 true 일때만 보이도록 수정하였다. </br>
 ```javascript
{isFetching && [...Array(parseInt(4))].map(() => (
                <Grid item xs={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Skeleton></Skeleton>
                </Grid>
              ))}

const Skeleton = styled.div`
  background-color: gray;
  border-radius: 5px;
  width: 200px;
  height: 300px;
`;
```
+ Infinity Scroll 수정
	+ addEventListener()의 scroll 이벤트를 이용해서 무한 스크롤 구현하였지만 reflow 등 성능 문제가 발생할 수 있다는 것을 알게 되었고, react-intersection-observer 을 사용하여 수정
   	+ react-intersection-observer 에서 제공하는 useInView 훅은 ref, inView를 Boolean 값으로 받아올 수 있다. 이때 ref는 element를 가리키고 inView는 ref가 가리키는 element가 화면에 랜더되면 true를 반환하여 fetchNext()를 통해 다음 페이지의 데이터를 fetching 할 수 있다.
 ```javascript
const { ref, inView } = useInView();

useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

return (
...
...

<div ref={ref}></div>
)
```
+ Slide Banner 다시 제작
	+ 기존 Banner는 state를 통해 슬라이드 아이콘(<, >)을 클릭하면 배열의 index를 +1 혹은 -1 하여 다음 영화를 보여줄 수 있는 형태로 제작하였다.
   	+ 하지만 이는 비효율적이라고 생각하여 Swiper 라이브러리를 사용하여 자동 슬라이드 및 페이지네이션이 가능한 슬라이드로 변경하였음.

+ 디자인 보완 및 불필요한 코드 수정
	+ 중복으로 사용되거나 불필요한 코드 삭제 및 수정
 	+ css 수정 및 사용되지 않는 theme 삭제
 
 
# 🤙 Github Commit Convention

| Mark | Content |
| ------------ | ------------- |
| feat | 새로운 기능 추가  |
| fix | 버그 수정  |
| style | css 수정, 코드 변경이 없는 경우  |
| remove | 폴더 삭제  |
| docs | 문서 수정  |
| refactor | 코드 리팩토링  |
</br>

# 📁 Folder Structure

📦src
>
 ┣ 📂apis
>
 ┃ ┣ 📜api.js
 >
 ┃ ┗ 📜core.js
>
 ┣ 📂components
 >
 ┃ ┣ 📂layout
>
 ┃ ┃ ┣ 📜header.js
 >
 ┃ ┃ ┣ 📜layout.js
>
 ┃ ┃ ┗ 📜scrollbtn.js
 >
 ┃ ┗ 📜moviebox.js
>
 ┣ 📂consts
 >
 ┃ ┗ 📜queryKey.js
>
 ┣ 📂pages
 >
 ┃ ┣ 📂detailpage
>
 ┃ ┃ ┣ 📂components
 >
 ┃ ┃ ┃ ┣ 📜detailmovie.js
>
 ┃ ┃ ┃ ┣ 📜review.js
 >
 ┃ ┃ ┃ ┗ 📜similar.js
>
 ┃ ┃ ┗ 📜index.js
 >
 ┃ ┣ 📂homepage
>
 ┃ ┃ ┣ 📂component
 >
 ┃ ┃ ┃ ┣ 📜banner.js
>
 ┃ ┃ ┃ ┗ 📜movielist.js
 >
 ┃ ┃ ┗ 📜index.js
>
 ┃ ┗ 📂searchpage
 >
 ┃ ┃ ┣ 📂component
>
 ┃ ┃ ┃ ┣ 📜moviebox.js
 >
 ┃ ┃ ┃ ┗ 📜searchmovielist.js
>
 ┃ ┃ ┗ 📜index.js
 >
 ┣ 📂route
>
 ┃ ┗ 📜router.js
 >
 ┣ 📂styles
>
 ┃ ┣ 📜common.style.js
 >
 ┃ ┣ 📜global.style.js
>
 ┃ ┗ 📜theme.style.js
 
</br>


