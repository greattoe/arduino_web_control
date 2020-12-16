### Node.js 설치

------

##### 1. 설치파일 다운로드

웹 브라우저에서  **URL: http://nodejs.org** 을 열어 **LTS** ( Long Term Supported ) 버전을 선택하여 다운로드한다.

<img src="img\image-20201216181543937.png" alt="image-20201216181543937" style="zoom:60%;" />  <img src="img\image-20201216181618831.png" alt="image-20201216181618831" style="zoom:60%;" />

##### 2. 설치파일 실행

<img src="img\image-20201216183405353.png" alt="image-20201216183405353" style="zoom: 48.75%;" />  <img src="img\image-20201216183558608.png" alt="image-20201216183558608" style="zoom:48.75%;" />

<img src="img\image-20201216235811765.png" alt="image-20201216235811765" style="zoom:48.75%;" />  <img src="img\image-20201216235920271.png" alt="image-20201216235920271" style="zoom:48.75%;" />

현재 **PC** 에 **Python** 과  **Visual Studio & C++** 컴파일러가 이미 설치되어 있다면 오른쪽 아래 그림의 **Tools for Native Module** 설치과정의 체크박스를 선택하지 않는다.  

<img src="img\image-20201217000042460.png" alt="image-20201217000042460" style="zoom:47.5%;" />  <img src="img\image-20201217000318545.png" alt="image-20201217000318545" style="zoom:48.75%;" />

<img src="img\image-20201217000433572.png" alt="image-20201217000433572" style="zoom:48.75%;" />  <img src="img\image-20201217000515702.png" alt="image-20201217000515702" style="zoom:48.75%;" />

##### 3. 설치 확인 및 Express.js 설치

다음 그림과 같이 시작 메뉴의 알파벳 **N** 항목에서 **Node.js** 프로그램 그룹을 찾아  **Command Prompt for Node.js** 를 연다. 

![image-20201217003919596](img\image-20201217003919596.png)

**설치된 node.js 버전 확인.** 

```
C:\Users\user01>  node –v 
v14.15.1
```

**설치된 npm**(Node Package Manager) **버전 확인.** 

```
C:\Users\user01>  npm –v
6.14.8
```

**Express.js 설치**

```
C:\Users\user01>  npm install -g express
```

```
C:\Users\user01>  npm install -g express-generator
```



`npm install`  명령에서 에러가 발생할 경우 

1. 에러 메세지 중에 `Python27` ,  `Python37`  같은 문구가 반복해서 나올경우, [파이썬을 설치](install_python.md)한다.

2. 에러 메세지 중에 `VS2013` 이 나타난 경우, **Visual Studio** + **C++ 개발도구** 를 설치한다.

3. 위 1, 2번 항목에 모두 해당할 경우, 아래 그림의 **Install Additional Tools for Node.js** 를 실행한다.

   ![image-20201217010240669](img\image-20201217010240669.png)