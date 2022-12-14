# 헌혈증 NFT 프로젝트
![image](https://user-images.githubusercontent.com/69336797/211747678-87a201d9-af29-4a32-bf3c-b764be66ad66.png)


## 프로젝트 소개

> 기존 종이 헌혈증을 NFT로 발행한 프로젝트입니다.

> 기존 헌혈증은 종이로 발급됩니다.  
> 종이로 보관함으로써 분실위험이 생기고 헌혈증을 양도하거나 기부하는 과정에서 불편함이 있었습니다.  
> 그뿐만 아니라 기부된 헌혈증의 사용을 추적하기 어려웠습니다.
<img width="1508" alt="image" src="https://user-images.githubusercontent.com/69336797/211746446-ae8539bb-88fb-42c1-9a82-2b8effe4f4e3.png">
위의 문제들로 인해 헌혈증의 사용률이 낮다고 생각됩니다.

문제를 해결하기 위해 헌혈증의 사용률을 높이기 위해 프로젝트를 시작하였습니다.

헌혈증을 NFT로 발급함으로써 얻을 수 있는 이점으로는

- 헌혈증을 개인 지갑에 소유하여 분실 확율을 낮춤.
- 소유하고 있는 헌혈증을 다른사람에게 쉽게 전송할 수 있음.
- 헌혈증을 발행 받은 사람부터 거쳐가는 소유자들의 지갑을 기록하기 때문에 투명하게 관리 가능.

## NFT 사용 시나리오

![image](https://user-images.githubusercontent.com/69336797/209934451-9bf40823-3ab7-472b-9f8b-6971c7e0e30f.png)

1. 컨트랙트를 발행한 지갑이 관리자가 됩니다.
2. 관리자는 새로운 관리자, 헌혈의집, 병원의 권한을 줄 수 있습니다.
3. 헌혈의 집 권한을 가진 지갑은 헌혈증을 발행할 수 있습니다.
4. 병원 권한을 가진 지갑은 헌혈증을 받아 사용할 수 있습니다.
5. 헌혈자는 헌혈증NFT로 발급할 수 있고, 필요로 하는 단체나 사람의 지갑주소만 알면 쉽게 양도하거나 기부할 수 있습니다.
6. 병원에서는 수혈받은 환자가 헌혈증 사용시 무상으로 혈액을 제공할 수 있습니다.

## 헌혈증 NFT

![image](https://user-images.githubusercontent.com/69336797/211750244-0124b7db-12f7-4b6b-90db-14c10cb0ab0b.png)

헌혈증 NFT 디자인은 사용전과 사용후의 디자인이 있습니다.

이미지의 크기는 1080 x 1080 입니다.

## 환경

- node v16.19.0

### 기술 스택
![image](https://user-images.githubusercontent.com/69336797/211746852-a0c8131a-b97f-4dbf-ae58-3d1ead2133e4.png)


## 실행전 설정

###Contract 배포

BloodDonationContract 에서
<img width="983" alt="image" src="https://user-images.githubusercontent.com/69336797/210166696-9169bf3c-0b86-47a1-b018-d2454a46e369.png">
사진에 보이는 것과 같이 klaytn url과 private key를 .env 파일을 만들어 넣어 줍니다.

private key의 지갑에는 충분한 klaytn이 있어야합니다.
지갑의 첫번째 주소가 admin으로 설정됩니다.

```
npx hardhat compile
```
후에 

```shell
npx hardhat run scripts/deploy.ts --network klaytn
npx hardhat run scripts/deploy.ts --network klaytn_cypress
```

contract를 baobab에 배포하려면 위의 커맨드를 입력하고, cypress에 배포하려면 아래의 명령어를 실행하면 배포가 됩니다.

### aws

```
type RequestPage
  @model
  @auth(
    rules: [
      { allow: public, operations: [read] }
      { allow: private }
      { allow: owner, operations: [create, update, delete] }
    ]
  ) {
  id: ID!
  type: String!
    @index(name: "byAt", sortKeyFields: ["at"], queryField: "sortByAt")
  title: String!
  description: String!
  at: AWSDateTime
  state: String!
  walletAddr: String!
  user: String!
}


```

aws에서 Graphql을 사용해서 사진과 같은 구조로 만들어 줍니다.

aws에서 authentication을 설정해줍니다.

설정후에 deploy해줍니다.

## 헌혈증 웹

### 메인

![image](https://user-images.githubusercontent.com/69336797/211747696-29c856bc-3800-4713-a648-c823c058f097.png)

### 헌혈증 조회

![image](https://user-images.githubusercontent.com/69336797/211747915-5bfc21d7-cd00-45ed-9a90-890bebfcac6e.png)
![image](https://user-images.githubusercontent.com/69336797/211747805-6107f4a3-2b45-4180-9577-5e2554f0fd88.png)


지갑에 보유하고 있는 헌혈증을 조회할 수 있습니다.

### 헌혈증 요청하기

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/69336797/210241093-039ca8ec-8ba5-481e-980d-be26c03cac5b.png">

로그인을 한 후에 도움을 요청할 수 있습니다.
kaikas 지갑 로그인은 하지 않아도 요청할 수 있습니다.
수정도 가능합니다.

### 헌혈의집 위치

![image](https://user-images.githubusercontent.com/69336797/210241392-fb08e38f-f5ac-41a3-8fba-4bb4d9509e9d.png)
전국에 헌혈의 집 위치를 볼 수 있습니다.

### 헌혈증 조회

![image](https://user-images.githubusercontent.com/69336797/211748522-b7618b4a-32e8-4dbc-81e5-daebd20a018f.png)

누구나 헌혈증의 ID를 알고 있다면 헌혈증의 사용여부와 소유자들 기록을 확인할수 있습니다.

### 설정

![image](https://user-images.githubusercontent.com/69336797/211748380-a36babea-1387-41b8-9c57-1204582b5b3d.png)

특정 권한이 있는 지갑이 사용할 수 있는 기능입니다.

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/69336797/210241723-4256d09f-8949-4a6d-84a0-55ced19b7fa0.png">

관리자 페이지에서  관리자의 권한을 가진 주소로 다른 주소에 역할을 부여할 수 있습니다.

![image](https://user-images.githubusercontent.com/69336797/210241840-6a0767ff-4a1f-4acd-960d-8fa0689b4cfe.png)

헌혈자의 지갑 주소를 입력하고 헌혈 종류, 헌혈한 지점을 선택하면 헌혈증을 발행할 수 있습니다.

<img width="1510" alt="image" src="https://user-images.githubusercontent.com/69336797/210242018-963ef681-caaf-4fd4-87ad-fde986f7f7fc.png">

 지갑 주소의 역할을 확인할 수 있습니다.
 
 
![image](https://user-images.githubusercontent.com/69336797/211748868-1aa4d6a1-6eba-4020-abce-182f4426943c.png)

 
병원의 권한을 가진 주소로 헌혈증을 사용할 수 있습니다. 
헌혈증의 사용여부는 헌혈증에 표시가 됩니다.


## 지갑 로그인과 헌혈증 웹 로그인

지갑 로그인은 Kaikas를 사용하여 구연하였습니다. 
헌혈증 웹 로그인은 AWS를 사용하여 구현하였습니다.
헌혈증 웹을 로그인해야만 헌혈증 요청게시판을 작성할 수 있습니다. 
헌혈증을 요청한 사람에 대한 정보가 있어야 믿고 헌혈증을 양도하고 기부할 수 있다고 생각되어 따로 로그인하도록 하였습니다.

![image](https://user-images.githubusercontent.com/69336797/211749877-7e9fdaf2-8e45-4f2b-863f-2036d09c2a7d.png)

![image](https://user-images.githubusercontent.com/69336797/211749781-a70f8732-25a3-462e-817f-99f5b1ee10a7.png)



