export class TextUtils {
  static messageFormat(messages: string, ...args: any[]) {
    let formattedMessage = messages;
    args.forEach((arg, index) => {
      formattedMessage = formattedMessage.replace(`{${index}}`, arg);
    });
    return formattedMessage;
  }
}
