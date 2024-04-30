#include <dirent.h>
#include <iostream>
// #include <fstream>
#include <sstream>
#include <string>
// #include <cstring>
#include <vector>
#include <sys/stat.h>
#include <sys/types.h>
#include <string.h>

#include "Client.hpp"

// #include <stat.h>

std::string Client::handleAutoIndex(std::string servRoot, std::string locRoot)
{
	std::string dirPath = servRoot + locRoot;

	struct stat st;
	if (stat(path.c_str(), &st) == -1 || !S_ISDIR(st.st_mode))
	{
		_responseStatus = 404;
		return;
	}

    std::stringstream body;
	body << "<html><head><title>Index of " << _request._uri << "</title></head><body><h1>Index of " << _request._uri << "</h1><hr><pre>";

	DIR *dir = opendir(dirPath.c_str());
	if (dir) {
		struct dirent *ent;
		while ((ent = readdir(dir)) != NULL) {
			if (ent->d_type == DT_DIR) {
				if (strcmp(ent->d_name, ".") != 0 && strcmp(ent->d_name, "..") != 0)
				body << "<a href=\"" << ent->d_name << "/\">" << ent->d_name << "/</a><br>";
			}
			else
				body << "<a href=\"" << ent->d_name << "\">" << ent->d_name << "</a><br>";
		}
		closedir(dir);
	}
	body << "</pre><hr></body></html>";

	return body.str();
}