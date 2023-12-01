import React,{useEffect,useRef} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Analisis() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default Analisis;