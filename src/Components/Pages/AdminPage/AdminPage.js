import { Button } from "antd";
import React from "react";
import "./AdminPage.css";

function AdminPage() {
  return (
    <div>
      <div className="AdminHeader">
        <Button>
          toll request<span>.</span>
        </Button>
        <Button>
          ranger request <span>.</span>
        </Button>
        <Button>
          transport conveyors <span>.</span>
        </Button>
        <Button>
          repair specialist <span>.</span>
        </Button>
      </div>
      {/* <center>C</center> */}
      <div>request</div>
      <div></div>
    </div>
  );
}

export default AdminPage;
