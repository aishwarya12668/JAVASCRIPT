class Person
{
    String name;
    int age;

    Person(String name, int age)
    {
        this.name = name;
        this.age = age;
    }

    boolean eligibility()
    {
        if(age >= 18)
            return true;
        else
            return false;
    }
}

public class Main
{
    public static void main(String[] args)
    {
        Person p1 = new Person("Aishwarya", 19);
        Person p2 = new Person("Ram", 20);

        System.out.println("NAME: " + p1.name + " Adult: " + p1.eligibility());
        System.out.println("NAME: " + p2.name + " Adult: " + p2.eligibility());
    }
}