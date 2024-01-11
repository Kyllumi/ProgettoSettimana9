import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { MdApps } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";

export default function MyHeader() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <h2 className='text-light ms-2 me-4'>TV Shows</h2>

                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className='border-light rounded-0'>
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='bg-dark'>
                            <Dropdown.Item href="#/action-1" className='bg-dark text-light'>Comedy</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className='bg-dark text-light'>Drama</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className='bg-dark text-light'>Thriller</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <AiFillAppstore className='text-light fs-3' />
                    <MdApps className='text-light fs-3 mx-3' />
                </div>
            </div>
        </>
    )
}
