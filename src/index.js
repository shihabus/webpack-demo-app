import { run } from "./app/app";

import "./main.css";
import "./main.scss";

import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/components.service";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
