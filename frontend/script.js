document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.display = 'none';
    // console.log("here");

    window.addEventListener('load', function() {
        document.documentElement.style.display = 'block';
    });
});

/* DOMContentLoaded 이벤트: HTML 문서의 기본 구조가 로드되고 파싱된 후 실행됩니다. 이 시점에서 페이지를 숨깁니다.
load 이벤트: 모든 리소스가 완전히 로드된 후 실행됩니다. 이 시점에서 페이지를 다시 표시합니다. */