'use strict';

import * as Turbo from "@hotwired/turbo";
import { Modal } from "bootstrap";
import Button from "./buttons";
import Dropdown from "./dropdown";
import Greeting from "./greeting";
import Theme from "./theme";
import Header from "./header";

const turboLoad = () => {
    Button.apply(Button);
    Dropdown.apply(Dropdown);
    Greeting.apply(Greeting);
    Theme.apply(Theme);
    Header.apply(Header);
}

document.addEventListener("turbo:load", turboLoad);