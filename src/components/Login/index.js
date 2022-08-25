import { Row, Col, Button, Typography } from 'antd'
import React from 'react'
import firebase, { auth } from '../../firebase/config'

const fbProvider = new firebase.auth.FacebookAuthProvider()
const { } = Typography
export default function Login() {
    console.log('asdfkh')
    const handleFbLogin = () =>{
        auth.signInWithPopup(fbProvider)
    }
    return (
        <div>
            <Row justify='center' style={{ height: 800 }}>
                <Col span={8}>
                    {/* <Title style={{ textAlign: 'center' }} level={3}>
                        Fun Chat 
                    </Title> */}
                    <h3 style={{ textAlign: 'center' }}>Fun Chat</h3>
                    <Button style={{ width: '100%', marginBottom: 5 }}>
                        Đăng nhập bằng google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleFbLogin}>
                        Đăng nhập bằng facebook
                    </Button>
                </Col>
            </Row>

        </div>
    )
}
