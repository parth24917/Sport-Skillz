#include<string.h>
#include<stdio.h>
int main()
{
FILE *filepointer;
char data[50] = hello world;

filepointer =fopen(“test.txt”,”w”);
fputs(data,filepointer);
fclose(filepointer);
return 0;
}