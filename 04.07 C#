using System;

public abstract class OrderProcessor
{
    public void ProcessOrder()
    {
        CheckOrder();
        ApplyDiscount();
        CreateOrder();
        SoundCustomer();
    }

    private void CheckOrder()
    {
        Console.WriteLine("Проверяем наличие товара на складе...");
        Console.WriteLine("Товар в наличии.");
    }

    protected abstract void ApplyDiscount();

    protected abstract void CreateOrder();

    private void SoundCustomer()
    {
        Console.WriteLine("Отправляем уведомление клиенту на email...");
        Console.WriteLine("Клиент уведомлен.");
    }
}

public class ObichnieZakazi : OrderProcessor
{
    protected override void ApplyDiscount()
    {
        Console.WriteLine("Применяем стандартную скидку 5%...");
    }

    protected override void CreateOrder()
    {
        Console.WriteLine("Создаем обычный заказ...");
        Console.WriteLine("Обычный заказ создан.");
    }
}

public class Optoviezakazi : OrderProcessor
{
    protected override void ApplyDiscount()
    {
        Console.WriteLine("Применяем оптовую скидку 20%...");
    }

    protected override void CreateOrder()
    {
        Console.WriteLine("Создаем оптовый заказ с дополнительной проверкой...");
        Console.WriteLine("Оптовый заказ создан.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Обработка обычного заказа:");
        OrderProcessor regularOrder = new ObichnieZakazi();
        regularOrder.ProcessOrder();

        Console.WriteLine("\nОбработка оптового заказа:");
        OrderProcessor wholesaleOrder = new Optoviezakazi();
        wholesaleOrder.ProcessOrder();
    }
}
