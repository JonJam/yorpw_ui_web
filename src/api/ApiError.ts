export default class ApiError extends ErrorEvent {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}
