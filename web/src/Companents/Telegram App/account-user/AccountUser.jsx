import './Account.css'
export function AccountUser({contact}){
    return(
        <div className="account_main" >
            <img style={{borderRadius:'20px'}} src={contact.avatar} width={150} alt="" />
            <h2>{contact.name}</h2>
            <span>{contact.address}</span>
        </div>
    )
}