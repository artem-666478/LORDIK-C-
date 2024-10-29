#include <iostream>
using namespace std;


/*
int main()
{
    int a = 0;
    cin >> a;
    int b = a * a * a*a;


    cout <<b;
}
*/
/*
int main()
{
    int a = 0;
    cin >> a;
    int b = a * a * a;
    int c = b * b;


    cout << c;
}

int main()
{
    int a = 0;
    cin >> a;
    int b = a * a * a;
    int c = b * b;


    cout << c;
}
*/
/*
int main()
{
    int a = 0;
    cin >> a;
    int b = a * a * a * a;
    int c = b * b;


    cout << c;
}
*/
/*
int main()
{
    int a = 0;
    cin >> a;
    int b = a * a * a * a;
    int c = b * b;
    int d = c * a;


    cout << d;
}
*/
/*
int main()
{
    int a = 0;
    cin >> a;
    int b = a * a * a * a; //4
    int c = b * b;//8
    int d = c * a*a;//10


    cout << d;
}
*/
/*
int main()
{
    int a = 0;
    cin >> a;
    int b = a * a*a*a; //4
    int c = b * b;//8
    int d = c * b;//12
    int e = d *a ;//12

    cout << e;
}
*/
/*
int main()
{
    double a, b, c, p, s;

    cin >> a >> b >> c;
    p =a + b + c;
    s = sqrt(p * (p - a) * (p - b) * (p - c));
    cout << s << endl << p;
    return 0;
}
*/
//max число 
/*
int main()
{
    int x = 0;
    cin >> x;
    int y = 0;
    cin >> y;
    if (x > y) {
        cout << x << y;
    }
    else {
        cout << y << x;
    }
}
*/
/*
int main()
{
    int x = 0;
    cin >> x;
    int y = 0;
    cin >> y;
    if (x < y) {
        cout << x<<"  ";
        cout<< y<<"  ";
    }
    else {
        
        cout << y << "  ";
        cout << x << "  ";
    }
}
*/
/*
int main()
{
    int z = 0;
    cin >> z;
    int x = 0;
    cin >> x;
    int y = 0;
    cin >> y;
    if (x < y) {
        if (y < z) {
            cout << x << y << z;
        else {
            cout << y << x << z;
        }
 }
        else {
            cout << y << "  ";
            cout << x << "  ";
        }
    }
}
// видеокарта проц материнка блок питания 
*/
int main()
{
    setlocale(LC_ALL, "Russian");
    int a = 1;
    int b = 2;
    int c = 3;
    int d = 4;
    int f = 0;
    cout << "выбор инфы" << endl << "1) Bидеокарта" << endl << "2) материнка" << endl << "3) проц" << endl << "4) блок питания";
    while (true)
    {
        cin >> f;
        if (f == 1) {
            cout << " — это компонент компьютера, который обеспечивает вывод данных на дисплей и выполняет различные задачи, например, обработку 2D-графики, декодирование видео, телевизионный вывод и настройку нескольких мониторов.Основным компонентом видеокарты является графический процессор(GPU), который выполняет необходимые вычисления.";
        }
        if (f == 2) {
            cout << "— это один из ключевых компонентов компьютера, невидимая, но фундаментальная основа, на которой строится работа всей системы.";
        }
        if (f == 3) {
            cout << "это программа или устройство, предназначенные для обработки чего-либо. Является центральным вычислительным элементом любого компьютера, управляет всеми остальными его элементами. Современный микропроцессор — это прямоугольная пластинка из кристаллического кремния. На ее маленькой площади расположены схемы (транзисторы).";
        }
        if (f == 4) {
            cout << "— это устройство, которое обеспечивает работу всех компонентов ПК, подавая им нужное напряжение и электричество. Он преобразует переменный ток из сети в постоянный различных величин.";
        }
    }
}
