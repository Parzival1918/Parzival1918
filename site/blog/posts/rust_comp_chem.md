---
title: Rust for computational chemists
authors:
  - pedro
date: 2025-04-03
categories:
  - Rust
  - Python
  - Computational Chemistry
draft: true
---

Exceprt

<!-- more -->

# Rust for computational chemists

Python is the programming language that dominates in all scientific disciplines. It does have a lot of strengths: a large number of packages that extend its functionality, and mainly that is very quick to write a script to do data analysis and simple tasks. Its syntax is also very simple, so learning it from scratch is not tedious. 

For a computational chemist, Python is a very useful tool due to the packages that the community has developed. A couple ones that (most) chemists are familiar with are:

| Package      | Description                          |
| :----------- | :----------------------------------- |
| `ase`       | Contains many tools to interact with atomic files in many formats and external programs. |
| `rdkit`       | Useful to interact with molecules programatically, extracting fragments and analysing their properties. The API does not stick to python syntax conventions: it uses camelcase for functions and methods instead of snakecase. |

These tools make it very easy and straightforward to interact, analyse and modify data such as crystals, molecules or output files from simulation packages. So, how does the ground stand when it comes to doing the same in Rust?

## Computational chemistry crates


