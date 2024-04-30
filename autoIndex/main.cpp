#include "Client.hpp"
#include <iostream>


int main() {
    // 예제 HTTP 요청을 생성합니다.
    Client client;
    std::string httpRequest = "GET /directory/ HTTP/1.1\r\nHost: example.com\r\n\r\n";
    client.setBuffer(httpRequest);

    // 자동 인덱스 페이지 생성
    std::string servRoot = "/path/to/server/root";
    std::string locRoot = "/directory/";
    std::string autoIndexHtml = client.handleAutoIndex(servRoot, locRoot);

    // 생성된 자동 인덱스 페이지 출력
    std::cout << "Auto Index HTML:\n" << autoIndexHtml << std::endl;

    return 0;
}