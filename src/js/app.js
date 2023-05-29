'use strict';

import * as Turbo from "@hotwired/turbo";
import { Modal } from "bootstrap";
import Button from "./buttons";
import Dropdown from "./dropdown";
import Sidebar from "./sidebar";
import Greeting from "./greeting";
import Form from "./form";
import Theme from "./theme";

const turboLoad = () => {
    Button.apply(Button);
    Dropdown.apply(Dropdown);
    Sidebar.apply(Sidebar);
    Form.apply(Form);
    Greeting.apply(Greeting);
    Theme.apply(Theme);
}

document.addEventListener("turbo:load", turboLoad);