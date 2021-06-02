type ApiEndpoint = {
    name: string,
    endpoint: string,
    region: string
}

type CognitoConfigs = {
    mandetorySignIn: boolean
    region: string
    userPoolId: string
    identityPoolId: string
    userPoolWebClientId: string
}

type StorageConfig = {
    region: string
    bucket: string
    identityPoolId: string
}

type AppConfigs = {
    Auth: CognitoConfigs,
    Storage: StorageConfig,
    API: {
        endpoints: ApiEndpoint[]
    }

}

const apiEndpoint = {
    name: "api",
    region: "eu-west-1",
    endpoint: ""
}

const defaultconfig: AppConfigs = {
    Auth: {
        mandetorySignIn: true,
        region: "eu-west-1",
        userPoolId: "",
        identityPoolId: "",
        userPoolWebClientId: "",
    },
    Storage: {
        region: "eu-west-1",
        bucket: "",
        identityPoolId: "",
    },
    API: {
        endpoints: [apiEndpoint]
    }
};


//To be replaces with prod enviroment
const prod = {
    ...defaultconfig,
};
const appConfig = process.env.REACT_APP_STAGE === "prod" ? prod : defaultconfig;

export default appConfig