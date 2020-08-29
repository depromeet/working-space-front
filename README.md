# 디지털 노마드들을 위한 위치 기반 주변 카페 알리미

- website : https://workinspace.netlify.app  
- android : https://play.google.com/store/apps/details?id=com.yonghochoi.nomadcafeapp
- [발표자료](https://drive.google.com/file/d/1txThGTWhUyNSn_zZAu-5jCaddLeAypRn/view?usp=sharing)

![작업공간](https://user-images.githubusercontent.com/29771088/91624724-cf680880-e9dc-11ea-8f6c-e0f887e5ccb5.gif)

# FrontEnd Architecture

- Mobx(3Layer Architecture)
- React(Dumb Component, Container Component, Page Component)
- React-Router


![](https://user-images.githubusercontent.com/29771088/88493863-56951b80-cfee-11ea-81f6-1ea2ae308a2d.png)

## Component

### Page Component
- 라우팅의 단위가 될 페이지 컴포넌트, 단순 랩핑으로써 역할만 한다.

### Container Component
- UI컴포넌트(Dumb Component)를 컨트롤 하는 역할
- Mobx Store의 데이터를 주입받아 Dumb Component에게 내려주는 역할
- Dumb Component의 UI로직이 아닌 라우팅, 데이터 Fetching등의 이벤트 핸들러는 이곳에서 처리함.
- 라우팅은 컨테이너 컴포넌트에서 처리하도록 한다.

### Dumb Component === Presentational Component === UI Component

- 순수하게 UI로직만 들어가야 하며 `UI상태`만을 관리해야함. 도메인에 대한 상태는 반드시 컨테이너 컴포넌트로 부터 주입 받아 사용해야함.
- 마찬가지로 UI의 상태를 바꾸기 위한 이벤트 핸들링만 해야함.
- 데이터를 fetch한다던지 UI로직과 관련 없는 mobx의 store를 건드리면 안됨.
- 이 컴포넌트는 반드시 독립적으로 설계되어야함. (다른 프로젝트에서도 가져다 사용할 수 있을 정도의 완전 독립)

## Mobx

### Repository

- 데이터에 접근하는 레이어
- API호출

### Store

- 비즈니스 로직을 처리하는 핵심 레이어
- Repository와 Model을 사용하여 비즈니스 로직을 처리한 후에 그 결과를 Mobx Observable State로 Store내부에서 관리합니다.

### Model

- 도메인 데이터를 담을 모델


