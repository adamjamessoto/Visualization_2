#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main(int argc, char* argv[])
{
    ifstream ifs("/Users/adamsoto/Desktop/SMU_Graduate_School/Fall 2016/Visualization_II/bugs_bunny.txt");
    if (!ifs)
    {
        cout << "File open failed!\n";
        return -1;
    }
    
    string str;
    while (getline(ifs, str))
    {
        cout << str << endl;
    }
    
    system("pause");
    return 0;
}