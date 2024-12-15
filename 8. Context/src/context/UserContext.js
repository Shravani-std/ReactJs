import React from "react";

const UserContext = React.createContext()

export default UserContext;



// Wrap all components in one UserContext
// User context act as a global variable
// after wrapping all components usercontext will become provider
/*<UserContext>
<Login/>
<Card>
    <Data/>
</Card>
</UserContext>*/