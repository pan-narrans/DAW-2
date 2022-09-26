# Regular Expressions

- [Regular Expressions](#regular-expressions)
  - [Assertions](#assertions)
    - [Boundaries](#boundaries)
    - [Lookahead and Lookbehind](#lookahead-and-lookbehind)
  - [Quantifiers or counting occurrences](#quantifiers-or-counting-occurrences)
    - [Greedy or not greedy](#greedy-or-not-greedy)
  - [Character classes](#character-classes)

Regular expressions are constructed following this pattern `/regex/`, regex being the thing you are looking for.

| Expressions |                                 |
| ----------- | ------------------------------- |
| `/abc/`     | Looks for occurrences of `abc`. |
| `/./`       | Matches any character.          |

Special modifiers can be appended to the end of the search like this: `/regex/i`. They can be combined together.

- `//i`: ignores case.
- `//g`: makes the search global and returns **all** occurrences, not just the first one.

## Assertions

### Boundaries

They are used to look for matches at the beginning or ending of the input. They will also look for matches after or before a line break *(depending on the type)*.

| Expressions |                                             |
| ----------- | ------------------------------------------- |
| `/^a/`      | Matches `a` at the **start** of the string. |
| `/a$/`      | Matches `a` at the **end** of the string.   |

### Lookahead and Lookbehind

| Expressions |     |
| ----------- | --- |
| `/a(?=a)/`  |     |
| `/a(?!a)/`  |     |
| `/a(?<=a)/` |     |
| `/a(?<!a)/` |     |

## Quantifiers or counting occurrences

| Expressions |                                                   |
| ----------- | ------------------------------------------------- |
| `/a*/`      | Zero or more occurrences of a.                    |
| `/a+/`      | One or more occurrences of a.                     |
| `/a?/`      | Zero or one occurrence of a. Also for non-greedy. |
| `/a{3}/`    | Exactly 3 of a.                                   |
| `/a{3,}/`   | 3 or more occurrences of a.                       |
| `/a{3,5}/`  | Between 3 and 5 occurrences of a.                 |

### Greedy or not greedy

By default **all searches are greedy** and will try to match the longest string possible. To make a search non-greedy you need to use the `?` modifier.  
This will return the shortest match.

```js
const string = "titanic"
const regex1 = "/t[a-z]*i/"
const regex2 = "/t[a-z]*?i/"

string.match(regex1); // Will return "[titani]"
string.match(regex2); // Will return "[ti]"
```

It can be used with all the previous quantifiers:

- `x*?`
- `x+?`
- `x??`
- `x{n}?`
- `x{n,}?`
- `x{n,m}?`

## Character classes

Character classes are used to match any of the specified characters.

| Expressions |                                                  |
| ----------- | ------------------------------------------------ |
| `/[abc]/`   | Looks for of a, b or c.                          |
| `/[a-c]/`   | Looks for of a, b or c.                          |
| `/[^]/`     | Looks for of what's **not** inside the brackets. |

To save us time some common character classes have been grouped under the following tags:

- `\d`: matches all numbers.
  - It's equivalent to `[0-9]`.
- `\D`: matches all that is not a number.
  - It's equivalent to `^[0-9]`.
- `\w`: matches all alphanumeric characters plus the underscore.
  - It's equivalent to `[A-Za-z0-9_]`.
- `\W`: matches all that is not an alphanumeric character nor the underscore.
  - It's equivalent to `[^A-Za-z0-9_]`.
- `\s`: matches a single whitespace character.
