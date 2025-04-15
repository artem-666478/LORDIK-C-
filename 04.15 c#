using System;
using System.Collections.Generic;
public interface INotificationObserver
{
    void Update(string message);
}
public sealed class NotificationService
{
    private static NotificationService _instance;
    private static readonly object _lock = new object();
    private List<INotificationObserver> _observers = new List<INotificationObserver>();
    private NotificationService() { }

    public static NotificationService Instance
    {
        get
        {
            lock (_lock)
            {
                if (_instance == null)
                    _instance = new NotificationService();
                return _instance;
            }
        }
    }
    public void Subscribe(INotificationObserver observer)
    {
        _observers.Add(observer);
    }

    public void Unsubscribe(INotificationObserver observer)
    {
        _observers.Remove(observer);
    }

    public void Notify(string message)
    {
        foreach (var observer in _observers)
            observer.Update(message);
    }
}

public class MobileAppUI : INotificationObserver
{
    public void Update(string message)
    {
        Console.WriteLine($"UI: Показать уведомление - '{message}'");
    }
}

public class TelegramBot : INotificationObserver
{
    public void Update(string message)
    {
        Console.WriteLine($"Telegram: Отправлено сообщение - '{message}'");
    }
}

public class Logger : INotificationObserver
{
    public void Update(string message)
    {
        Console.WriteLine($"Log: Записано в журнал - '{message}'");
    }
}

class Program
{
    static void Main()
    {       
        var notificationService = NotificationService.Instance;
        var ui = new MobileAppUI();
        var telegram = new TelegramBot();
        var logger = new Logger();
        notificationService.Subscribe(ui);
        notificationService.Subscribe(telegram);
        notificationService.Subscribe(logger);
        notificationService.Notify("Новое сообщение от системы!");
        notificationService.Unsubscribe(logger);
        notificationService.Notify("Обновление данных завершено!");
    }
}
