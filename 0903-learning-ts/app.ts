import { MyServer } from "./my-server/MyServer";

const app = new MyServer({
    port: 8888,
});

app.start();
