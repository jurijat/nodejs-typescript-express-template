export class HelloHandler {
  constructor() {}

  sayWhoAreYou(): string {
    return "Who are you?";
  }

  sayHi(to: string): string {
    return `Hi ${to}!`;
  }

  sayBye(to: string): string {
    return `It was a pleasure to meet you, ${to}.`;
  }
}
