import { ServerApplication } from "infrastructure/ServerApplication";

async function runApplication(): Promise<void> {
  const serverApplication: ServerApplication = new ServerApplication();
  await serverApplication.run();
}
runApplication();
