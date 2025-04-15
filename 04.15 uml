using System;
using System.Threading;

public interface ITrafficLightState
{
    void Handle(TrafficLight trafficLight);
    void Notify();
}

public class RedState : ITrafficLightState
{
    public void Handle(TrafficLight trafficLight)
    {
        Console.WriteLine("Красный свет");
        Notify();
        Thread.Sleep(5000); 
        trafficLight.State = new YellowState();
    }

    public void Notify()
    {
        Console.WriteLine("Стоять! Машины: СТОП");
        Console.WriteLine("Пешеходы: СТОЯТЬ");
    }
}

public class YellowState : ITrafficLightState
{
    public void Handle(TrafficLight trafficLight)
    {
        Console.WriteLine("Жёлтый свет");
        Notify();
        Thread.Sleep(2000); 

        if (trafficLight.PreviousState is RedState)
            trafficLight.State = new GreenState();
        else
            trafficLight.State = new RedState();
    }

    public void Notify()
    {
        Console.WriteLine("Внимание! Машины: ПРИГОТОВИТЬСЯ");
        Console.WriteLine("Пешеходы: ПРИГОТОВИТЬСЯ");
    }
}

public class GreenState : ITrafficLightState
{
    public void Handle(TrafficLight trafficLight)
    {
        Console.WriteLine("Зелёный свет");
        Notify();
        Thread.Sleep(10000); 
        trafficLight.State = new YellowState();
    }

    public void Notify()
    {
        Console.WriteLine("Машины: ЕХАТЬ");
        Console.WriteLine("Пешеходы: ИДТИ");
    }
}

public class TrafficLight
{
    public ITrafficLightState State { get; set; }
    public ITrafficLightState PreviousState { get; set; }

    public TrafficLight(ITrafficLightState state)
    {
        State = state;
    }

    public void Run()
    {
        while (true)
        {
            PreviousState = State;
            State.Handle(this);
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        var trafficLight = new TrafficLight(new RedState());

        trafficLight.Run();
    }
}
