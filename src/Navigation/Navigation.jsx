// import { AppstoreOutline,HomeOutlined  } from '@ant-design/icons';
import { Menu, Modal } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {MdOutlineClose} from "react-icons/md"; 
import './navigation.scss';
const items = [
  {
    label:  <NavLink to="/">Home</NavLink>,
    key: '1'
  },
  {
    label: <NavLink to="/about">About</NavLink>,
    key: '2'
  },
  {
    label: <NavLink to="/gallery">Gallery</NavLink>,
    key: '3'
  },
  {
    label: <NavLink to="/contact">Contact Us</NavLink>,
    key: '4'
  },
];

const Navigation = (Props) => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    setCurrent(e.key);
    Props.setIsMenuModal(!Props.isMenuModal);
  };
  const onCancel = (e) => {
    Props.setIsMenuModal(!Props.isMenuModal);
  };

  return (
    <Modal
      className="menuDrawer"
      maskClosable={false}
      closeIcon={<MdOutlineClose />}
      style={{ top: 20 }}
      open={Props.isMenuModal}
      footer={null}
      onCancel={onCancel}
    >
        <Menu onClick={onClick} selectedKeys={[current]} mode="vertical " items={items} />;

    </Modal>
)
};

export default Navigation;