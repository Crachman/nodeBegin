~演示一种错误的使用非阻塞操作的方式

在start函数中的exec函数中，使用了回调函数，即非阻塞异步，
导致content的值还没被stdout赋值，就被return了

