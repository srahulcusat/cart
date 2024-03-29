import React from 'react';

const NavbarHeader = (props)=> {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img 
                    style={styles.cartIcon}
                    src='https://t3.ftcdn.net/jpg/01/13/95/02/240_F_113950213_2znQQrapC21FcNXfvqwjnXm5gs6jDi06.jpg' />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  

export default NavbarHeader;