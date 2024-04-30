#include <dirent.h>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <algorithm> // 추가: 정렬을 위한 헤더
#include <sys/stat.h>
#include <sys/types.h>
#include <cstring>
#include <iomanip>
#include "Client.hpp"

std::string FormatTime(time_t time)
{
	char buffer[80];
	struct tm *timeinfo = localtime(&time);
	strftime(buffer, 80, "%Y-%m-%d %H:%M:%S", timeinfo);
	return std::string(buffer);
}

std::string FormatSize(double size)
{
	const char *sizes[] = { "B", "KB", "MB", "GB", "TB" };
	int i = 0;
	while (size > 1024)
	{
		size /= 1024;
		i++;
	}

	std::ostringstream oss;
	oss << std::fixed << std::setprecision(2) <<size << sizes[i];
	return oss.str();
}

std::string Client::handleAutoIndex(std::string servRoot)
{
    std::string locRoot = _request._uri;
    std::string dirPath = servRoot + locRoot;

    struct stat fileStat;
    std::stringstream body;
    body << "<html>\n<head>\n<title>Index of " << locRoot << "</title>\n</head>\n<body>\n";
    body << "<h1>Index of " << locRoot << "</h1>\n";
	body << "<hr> <pre>\n<table>\n<tr><th></th><th></th><th></th></tr>\n";

    DIR *dir = opendir(dirPath.c_str());
	if (dir == NULL) {
		_responseStatus = 404;
		return "";
	}
    if (dir)
    {
        std::vector<std::string> fileList;
        struct dirent *ent;
        while ((ent = readdir(dir)) != NULL)
            fileList.push_back(ent->d_name);
        closedir(dir);

        std::sort(fileList.begin(), fileList.end());

        int count = fileList.size();
        for (int i = 0; i < count; i++)
        {
            std::string fileName = fileList[i];
            if (fileName == ".")
                continue;
            std::string filePath = dirPath + "/" + fileName;
            if (stat(filePath.c_str(), &fileStat) == 0)
            {
                body << "<tr>" << "<td>";
                if (S_ISDIR(fileStat.st_mode))
                    body << "<a href=\"" << fileName << "/\">" << fileName << "/</a>";
                else
                    body << "<a href=\"" << fileName << "\">" << fileName << "</a>";
                body << " </td> <td>\t\t" << FormatTime(fileStat.st_mtime) << "</td>";
                double fileSize = static_cast<double>(fileStat.st_size);
                body << "<td>\t\t" << FormatSize(fileSize) << " </td>" << "</tr>\n";
            }
        }
		body << " </table> </pre>\n<hr>\n</body>\n</html>\n";
    }

    return body.str();
}
