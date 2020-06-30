require("dotenv").config();
const { app, BrowserWindow } = require("electron");

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === "production") {
    win.loadFile("./build/index.html");
  } else {
    win.loadURL("http://localhost:3000/");
  }

  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on(
  "certificate-error",
  (event, webContents, url, error, cert, callback) => {
    event.preventDefault();
    callback(true);
  }
);
