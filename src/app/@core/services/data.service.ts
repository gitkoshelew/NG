
export class DataService {

  private heading = "dependencyInjection";

  private meritsList: any = {
    'opacity': {
      'text':'transparency',
      'value':'100%'
    },
    
    'consistency': {
      'text':'clients',
      'value':'400'
    },
    'insurance': {
      'text':'noadditional',
      'value':'7 days'
    },
  }

  public skillsList: any = {
    'frontend': {
      'text':'frontend-developer', 'value':'javascript'
    },
    
    'backend': {
      'text':'backend-developer', 'value':'mongo'
    },
  }
  constructor() { }

  private objectFilter(obj, name){
    return Object.keys(obj).reduce((acc,key)=>{
      if (key !== name){
        return {...acc, [key]:obj[key]}
      }
      return acc
    }, {})
  }

  public getMerits(){
    return this.meritsList
  }
  public getSkills(){
    return this.skillsList
  }
  public removeMerit(name){
    this.meritsList = this.objectFilter(this.meritsList,name)

  }

  public addMerit(name, text, value){
    this.meritsList = {...this.meritsList, [name]: {
      text, value }
    }
  }
}
