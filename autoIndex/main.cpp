#include "Client.hpp"
#include <iostream>


int main() {
    // 예제 HTTP 요청을 생성합니다.
    Client client;
    std::string httpRequest = "GET /directory/ HTTP/1.1\r\nHost: example.com\r\n\r\n";
    client.setBuffer(httpRequest);

    // 자동 인덱스 페이지 생성
    std::string servRoot = "/workspaces/minco/autoIndex/";
    // std::string locRoot = "";
    client.setUri("");
    std::string autoIndexHtml = client.handleAutoIndex(servRoot);

    // 생성된 자동 인덱스 페이지 출력
    std::cout << autoIndexHtml << std::endl;

    return 0;
}