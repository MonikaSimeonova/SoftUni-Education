function extensibleObject(){
    function ExtensibleObj(){
        ExtensibleObj.prototype.extend = function (template){
            Object.entries(template).forEach(([key,value])=>{
                if(value instanceof Function){
                    Object.getPrototypeOf(this)[key] = valiue
                }else{
                    this[key] = value
                }
            });
        }
        return new ExtensibleObj()
    }

    const myObj = extensibleObject();
    console.log(myObj);
    const template = {
        extensionMethod : function (){

        },
        extensionProperty: 'something'
    }
    myObj.extend(template)
}