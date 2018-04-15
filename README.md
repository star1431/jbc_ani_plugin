JQurey Plugin
============
JBC_ani Plugin 입니다.
============
#### 미리보기

#### [http://chaos0425.dothome.co.kr/jbc_plugin/index.html](http://chaos0425.dothome.co.kr/jbc_plugin/index.html)

**JBC Ani 플러그인**은 여러 이미지가 차례대로 하나씩 나타나면서 보여주는 형식의 제이쿼리 플러그인입니다.

플러그인 옵션을 통해 방향과 속도, 반복여부 등 다양한 효과를 나타낼 수 있습니다.

> **플러그인기능**

> - 나타나는 방향 조정 가능
> - 나오는 속도 조정 가능
> - 반복여부 가능
> - 이미지 사라지는 속도 조정 가능
> - 시작위치 도착위치 조정 가능

### Usage
**1.jqurey 호출**

플러그인을 사용하기전에 JQuery Library를 부르고 jbc_ani.min.js를 호출 합니다.
```html
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="jbc_ani.min.js"></script> 
```
**2.기본구조**

기본구조는 다음과 같으며 클래스명은 자유입니다.
```html
<div> 
    <div class="custom">
        <nav><img src="....."></nav>
        <nav><img src="....."></nav>
        <nav><img src="....."></nav>
    </div>    
<div> 
```

**3.플러그인 적용**

.jbc_ani() 사용하여 해당 div에 플러그인을 적용 시킵니다.
```html
<script type="text/javascript">
    $(function(){
        $('.custom').jbc_ani();
    })
</script> 
```
