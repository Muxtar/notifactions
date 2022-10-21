import requests
class Promise():
    def __init__(self, func) -> None:
        self.status_code = None
        func(self.resolve, self.reject)
    
    def resolve(self, param = None):
        self.status_code = param.status_code
        self.data = param.json()

    def reject(self, param = None):
        self.data = param
        self.status_code = param.status_code

    @classmethod
    def then(cls, fnk1):
        return fnk1(cls.data)

    def __str__(self) -> str:
        return str({'status_code':self.status_code})

def fetch(param):
    api = requests.get(param)
    return Promise(lambda resolve, reject: resolve(api) if api.status_code == 200 else reject(api))


for i in range(1, 10):
    print(fetch(f'https://jsonplaceholder.typicode.com/todos/{i}').then(lambda x:x))