#include <iostream>
using namespace std;

class SmartDevice {
private:
    bool isOn; 

public:
    SmartDevice() : isOn(false) {} 


    void executeCommand(const string& command) {
        if (command == "включить") {
            isOn = true;
            cout << "Устройство включено." << endl;
        }
        else if (command == "выключить") {
            isOn = false;
            cout << "Устройство выключено." << endl;
        }
        else {
            cout << "Неизвестная команда: " << command << endl;
        }
    }


    bool getState() const {
        return isOn;
    }
};


class SmartHome {
private:
    static const int MAX_DEVICES = 10; 
    SmartDevice devices[MAX_DEVICES];  
    int deviceCount;                   
public:
    SmartHome() : deviceCount(0) {}
    
    void addDevice() {
        if (deviceCount < MAX_DEVICES) {
            devices[deviceCount] = SmartDevice();
            deviceCount++;
            cout << "Устройство добавлено. Всего устройств: " << deviceCount << endl;
        }
        else {
            cout << "Достигнуто максимальное количество устройств." << endl;
        }
    }

    
    void executeCommandOnAllDevices(const string& command) {
        for (int i = 0; i < deviceCount; ++i) {
            cout << "Устройство " << i + 1 << ": ";
            devices[i].executeCommand(command);
        }
    }
};

int main() {

    setlocale(LC_ALL, "RUS");
    SmartHome home;

    
    home.addDevice();
    home.addDevice();
    home.addDevice();

    
    home.executeCommandOnAllDevices("включить");
    home.executeCommandOnAllDevices("выключить");

    return 0;
}
