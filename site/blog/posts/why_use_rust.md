---
title: Why use Rust?
authors:
  - pedro
date: 2025-04-03
categories:
  - Rust
  - Python
draft: true
---

Exceprt

<!-- more -->

# Why use Rust?

*Rust* is a systems programming language that has picked up a lot of attention in the past years. It is an efficient, memory safe, compiled language with a lot of potential. So, should you use it in your projects?

In this post I will not go over *Rust* syntax and all its features, instead I'll touch on the things I find most interesting and relevant about it. I will link other resources so you can go into the rabbit hole afterwards! I will also make comparisons with Python, as it is a programming language that I also use daily and many people are familiar with.

## Basics

Personally, I think the best feature that *Rust* has is it's **typing system**. *Rust* is a strongly typed static language. This means that at compile time, all the types of variables, arguments and function returns must be known and the compiler ensures that everything is called with the correct types. Just this feature already increases the confidence in which you can write code, the compiler is always there making sure you are not calling functions with wrong arguments that could break the code.

Let's use some simple Python code to show how useful this feature is. The following code snippet shows a program that will add the values of two variables `a` and `b` and return the result.

``` py linenums="1"
def add(a, b):
    return a + b

add(4, 2)     # 6
add(4, 2.5)   # 6.5
add("a", "b") # ab
add(4, "b")   # raises an Exception
```

And before we check where this code can go wrong, lets see the *Rust* equivalent function:

``` rust linenums="1" hl_lines="7 8 9"
fn add(a: i64, b: i64) -> i64 {
    a + b
}

fn main() {
    add(4, 2)     // 6
    add(4, 2.5)   // Does not compile
    add("a", "b") // Does not compile
    add(4, "b")   // Does not compile
}
```

They both look very similar! It is a simple functionality but still shows the power of *Rust*'s typing system. Looking at the Python code, the function works as expected when we add two digits, even if they are of different types like `#!python int` and `#!python float`, but it can add strings too! We might think of this as a feature, but if the developer wrote this function expecting to add digits and digits alone, adding strings is an unexpected behaviour. When Python is executing the code it does not check what types we are passing to the function, in fact we did not even define them in the function signature! Even if we redefined it like:

``` py linenums="1"
def add(a: int | float, b: int | float) -> int | float:
    return a + b
```

The Python interpreter would still not check the types, those are there purely for a human to read them but nothing else. We could still call the function with strings and there would be no issues. Let's move to the *Rust* code now. In there we are required to define the types of the function arguments, which we decided to set as `#!rust i64`, and the return type. Once we do that, we are giving the compiler all the information it needs to check we are calling the function with the correct data.

This means that calling `#!rust add()` with the values shown in lines 7-9 of the code snippet would immediately raise a compilation error. *Rust* does not allow this code to continue compiling into a binary because we are calling the function with the wrong arguments and therefore the program would crash if it were to be compiled and executed. This is something that has bothered me about Python since I began to use it: types are optional and if they are added they are not used for anything, completely ignored by the interpreter. This is a design choice that means code can be written and executed very quickly, but at the risk of crashing mid-execution due to wrong types being used.

## Rust ecosystem



## Not everything is great
