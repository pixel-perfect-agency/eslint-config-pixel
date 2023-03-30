# ESLint Config Pixel

Strict ESLint configuration with Prettier maintained by Pixel Perfect Agency.

## Rationale

This package is designed for usage with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) and [Prettier](https://prettier.io/).

We want to have a strict ESLint configuration that is consistent across projects. We also want to use Prettier to format our code. This package implements the configuration we use in our projects.

⚠️**Note: This configuration is only recommended for individuals or teams which consist of very proficient Typescript developers, please take this into consideration ([rules](#rules))**

## Installation

```bash
npm install --save-dev eslint-config-pixel
```

## Usage

Add this to your `.eslintrc` file:

You can use a lot of different configuration files, view the [ESLint documentation](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats) for more information.

### `package.json`

```json
{
    "eslintConfig": {
        "extends": "pixel"
    }
}
```

### `.eslintrc`

```json
{
    "extends": "pixel"
}
```

You only need to provide the word `pixel` to the `extends` property. Eslint will automatically look for the `eslint-config-pixel` package.

You can also add your own rules to the configuration file.

```json
{
    "extends": "pixel",
    "rules": {
        "no-console": "off"
    }
}
```

## Rules

This package extends the following packages:

-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
-   [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
-   [typescript-eslint](https://typescript-eslint.io/getting-started/)

`@typescript-eslint/eslint-plugin` includes over 100 rules that detect best practice violations, bugs, and/or stylistic issues specifically for TypeScript code. You can find the full list of rules [here](https://typescript-eslint.io/rules/)

### Examples

Some examples of the rules that are included in this package, as mentioned before, some of these rules are very strict and should only be used by very proficient Typescript developers. If you don't have a lot of experience with Typescript & Javascript, you should probably use a different, less strict configuration.

`@typescript-eslint/prefer-for-of`

```typescript
// Bad
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Good
const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}
```

`@typescript-eslint/no-floating-promises`

```typescript

// Bad
const promise = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
};

promise();

// Good
const promise = async () => {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
};

const result = await promise();

if (result) // do something
```

There are a lot of rules like this which enforce good practices and prevent bugs, however they take some time to get used to and to understand.

## Contributing

Contributions are always welcome! Please understand that this package is maintained by Pixel Perfect Agency and we will only accept contributions that we feel are in line with our vision for this package.

## License

MIT © [Pixel Perfect Agency](./LICENSE) 2023
