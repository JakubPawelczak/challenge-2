# Challenge 2 - Training and Vocabulary

**Congratulations on completing the first challenge!**

Now we will dive into real capsule writing!

1. Download the capsule code for this challenge.

2. Look around, get familiar with the capsule - Startup Search!

This time we will do the most important thing in capsule creation!
We will teach Bixby how to interpret _natural language_ from the user.

For that we need **Training** and **Vocabulary**

First we need to know which specific behaviour of the capsule we want Bixby to learn.

4. Let's check what kind of actions do we have in our capsule.
Go to: _models/actions_
You can see that we have one action **FindStartup.model.bxb**. Let's look what is inside.

```
action (FindStartup) {
  type (Search)
  collect {
    input (startup) {
      type (StartupEnum)
    }
  }
  output (Startup)
}
```

When training an action we want to focus on one key element which are inputs
You can see that our action collects only one input **startup** of Type **StartupEnum**
Let's check what is this **StartupEnum**

5. Go to: _models/concepts/primitives_
Open StartupEnum.model.bxb

```
enum (StartupEnum) {
  symbol (GoldenStandard)
  symbol (ThatFork)
  symbol (MrBunny)
  symbol (Books)
  symbol (Glasses)
}
```

What we can see is a model of type **enum** which is an enumeration of elements.
We call those elements **symbols**
You can find 5 symbols here that represent 5 startups from our database (you can find it here: _code/startups.js_)

6. We will teach Bixby how to understand that people are refering to one of these startups using **natural language**
For that we need a **Vocabulary**!
Let's create the file: Go to _resources/en/vocabulary_ -> _right click_ -> new -> _Vocablary_. Let's call it _StartupEnum_ to know what is it refering to.
We will keep all the setup fields as default, feel free to ask one of us what are they for.
You can delete the file .gitkeep it was there to have the folder on github.

7. Now we have an empty file called _StartupEnum.vocab.bxb_
Let's get into coding!
First we will define the vocab and to which model it is related.
Write _vocab (StartupEnum) {}_ (Add a new line between the braccets to write inside them)

```
vocab (StartupEnum) {
  
}
```

8. Now we want to define a vocabulary for each of our startups in the enum model.
Look back at _StartupEnum.model.bxb_, we have 5 symbols.
In _StartupEnum.vocab.bxb_ add _"GoldenStandard" {}_ (Add a new line between the braccets to write inside them)
Your vocab file should look like this now:

```
vocab (StartupEnum) {
  "GoldenStandard" {
  
  }
}

```

9. Add how you think poeple will call this startup using natural language
For example as the name suggests people might call it _golden standard_.
Let's add it to our vocabulary! Write _"golden standard"_ within the inner braccets to define that _GoldenStandard_ should be recognised when an user says _golden standard_.
It should look like this:

```
vocab (StartupEnum) {
  "GoldenStandard" {
    "golden standard"
  }
}
```

10. Now apply points **8** and **9** for all the other startups.
>
> As a HINT: for _MrBunny_ - mister is normalised by our ASR (automatic speech recognition) software to _Mr. _.
>

By the end your vocabulary for _StartupEnum_ should look somewhat like this.

```
vocab (StartupEnum) {
  "GoldenStandard" {
    "golden standard"
  }
  "ThatFork" {
    "that fork"
  }
  "MrBunny" {
    "Mr. Bunny"
  }
  "Books" {
    "books"
  }
  "Glasses" {
    "glasses"
  }
}
```

11. We are very close to teach Bixby how people will speak to him. All the setup is complete let's jump into **Training**!
Let's create the file: Go to _resources/en_ -> _right click_ ->  _new_ -> _Training_ -> _Create_
We will keep all the setup fields as default, feel free to ask one of us what are they for.

12. Let's go and write our first training utterance!
You can see a field with grey text _Enter natural language training_. That's were we will write our sentences to train Bixby.
How do you think people will ask about a startup in our capsule?
Maybe: _what is <startup>_ or... _find <startup>_ 
It's up to you to decide how the user will be able to ask Bixby things in your capsule.
Choose wisely as this is the most important part of creating a capsule!
I think _what is <startup>_ is a good and plausible way of asking for a startup that we don't know anything about.
Let's teach it to Bixby!
Write your first training utterance in the field _Adding New Training_ choose an expression from our vocabulary that we created just beforehand.
I want to ask about the startup **Books**
Let's write: **what is books** and hit enter!
We've added our first training!

13. In order for Bixby to understand that we need to define a **Goal** and mark an **Input** in this utterance
First let's focus on the **Goal**
Well, we want Bixby to show us information about a startup (about Books to be exact in this example).
Let's go back to our action _FindStartup.model.bxb_ and see what is the output of say action:

```
  output (Startup)
```

We cant safely assume that this is our **Goal**.
Let's add _Startup_ as our goal then!

14. Now we need to mark our input in this sentence.
Click on the word _books_ 
A box appeared under it with four keys: **Value** **Route** **Sort** **Role**
Today we will focus only on the **Value**
For a value we need to define a **Node** and a **Form**
The **Node** is the model that we want to be recognised and the **Form** is some element of that model.
In our case the Node will be: _StartupEnum_ and the Form will be: _Books_

Click on SAVE

Congratulations you've just added your first training to our capsule!

15. Let's check if it worked!
In the training window click **Compile NL Model** in the top right
Now go to the simulator and write your question and see if it works!
Check if it works with other expression from our vocabulary!

16. Now try to add one more _training utterance_ but this time replace _books_ with _golden standard_.

17. launch the simulator and show us what you've taught to Bixby!
