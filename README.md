# Robot Global Team

## Task

### 1. RESTful API 작성

- #### DB 작성

  - ##### DB 만들기
    - rgt
  - ##### 칼럼 만들기
    - order_id product_name options table_no quantity order_date order_time robot_status date_time seq dong ho orderer_name

- #### 처리

  - ##### REST 프로토콜의 POST 통해 DB의 CREATE 수행

  - ##### 응답
    - 정상 응답 -> `주문번호 : ${order_id} : 수신`
    - 비정상응답 -> `Error`
    - pretty -> `</pre>주문번호 : ${order_id} : 수신`

### 2. 중복데이터 처리 및 데이터 수정

- #### 고유(Unique) 무결성
  - order_id 칼럼
  - 예외처리
- #### 값 변환
  - product_name 칼럼

### 3. Google OAuth 2.0 로그인

- #### github에 예외처리 프로그램 작성

<br>
## pseudo code

```
- DB 만들기
    - 볼륨 마운트 위한 호스트의 디렉토리 생성
        - db/maria/conf
        - db/maria/init
    - DB 환경 설정 파일
        - db/maria/conf/my.cnf
    - DB 데이터 스크립트 생성
        - db/maria/init/create_all.sql
    - 도커 컨테이너 환경 설정 파일
        - .env.db.docker
    - 도커 컨테이너 docker compose
        - docker-compose.yml


- 서버 만들기
    - NestJS 프로젝트 생성
    - DB 연결
    - 입력 오류 방지
        - 유효성 검사 : DTO
        - 예외처리 : validationPipe
    - DB CRUD
        - TypeORM


- 로그인
```

## Google OAuth 로그인

<img width="700" alt="oauth_google" src="https://github.com/MagnaPax/assignment_r-t/assets/34564706/b4ba76e6-9fd5-4b99-a399-2a17386197c3">
