
-- 데이터베이스 생성
CREATE DATABASE rgt;


-- 사용할 DB 선택
USE rgt;


-- `product` 테이블 구조 생성
CREATE TABLE product (
  order_id VARCHAR(255),
  product_name VARCHAR(255) COMMENT '상품 이름',
  options VARCHAR(255),
  table_no INT,
  quantity INT,
  order_date DATE,
  order_time TIME,
  robot_status VARCHAR(255),
  date_time DATETIME,
  seq VARCHAR(255),
  dong VARCHAR(255),
  ho VARCHAR(255),
  orderer_name VARCHAR(255)
);