
function ButtonClick(buttonName)
{
	if(buttonName=='Home')
	{
		document.getElementsByTagName("Object")[0].setAttribute("data","Home Content.html")
	}
	else if(buttonName=='Categories')
	{
		document.getElementsByTagName("Object")[0].setAttribute("data","Categories.html")
	}
	else if(buttonName=='Account Details')
	{
		document.getElementsByTagName("Object")[0].setAttribute("data","Account Details.html")
	}
	else if(buttonName=='Shopping Cart')
	{
		document.getElementsByTagName("Object")[0].setAttribute("data","Shopping Cart.html")
	}	
}

function HomeImage(imageLink)
{
	if(imageLink=="Discounts")
	{
		window.location.assign("Discounts.html")
	}
	else if(imageLink=="NewProducts")
	{
		window.location.assign("New Products.html")
	}
	else if(imageLink=="ShippingCalculator")
	{
		window.location.assign("Shipping Calculator.html")
	}
}
var clicked=0
function ProductName()
{
	
	var product=document.calculator.ProductNames.value
	var parents=document.getElementById("options")
	if(clicked!=0)
	{		
			var button1=document.getElementById("Label1")
			var button2=document.getElementById("Label2")
			var button3=document.getElementById("Label3")
			parents.removeChild(button1)
			parents.removeChild(button2)
			parents.removeChild(button3)
			clicked=0
	}
	else
	{
		if(product=="iMac Pro"&&clicked!=1)
		{
			var text1=document.createElement("Label")
			text1.setAttribute("id","Label1")
			var text2=document.createElement("Label")
			text2.setAttribute("id","Label2")
			var text3=document.createElement("Label")
			text3.setAttribute("id","Label3")
			
			var option1=document.createElement("INPUT")
			var option2=document.createElement("INPUT")
			var option3=document.createElement("INPUT")
			
			option1.setAttribute("value","8-core")
			option1.setAttribute("type","radio")
			option1.setAttribute("name","shipoptions")
			option1.setAttribute("id","optionbutton1")
			
			option2.setAttribute("value","10-core")
			option2.setAttribute("type","radio")
			option2.setAttribute("name","shipoptions")
			option2.setAttribute("id","optionbutton2")
			
			option3.setAttribute("value","18-core")
			option3.setAttribute("type","radio")
			option3.setAttribute("name","shipoptions")
			option3.setAttribute("id","optionbutton3")
			
			text1.innerHTML+="<font face=neou size=2 color=white> 8-core"
			text2.innerHTML+="<font face=neou size=2 color=white> 10-core"
			text3.innerHTML+="<font face=neou size=2 color=white> 18-core"
			
			text1.appendChild(option1)
			text2.appendChild(option2)
			text3.appendChild(option3)
			
			document.getElementById("options").appendChild(text1)
			document.getElementById("options").appendChild(text2)
			document.getElementById("options").appendChild(text3)
			
			clicked=1
		}
	
		if(product=="iPad"&&clicked!=2)
		{
			var text1=document.createElement("Label")
			text1.setAttribute("id","Label1")
			var text2=document.createElement("Label")
			text2.setAttribute("id","Label2")
			var text3=document.createElement("Label")
			text3.setAttribute("id","Label3")
			
			var option1=document.createElement("INPUT")
			var option2=document.createElement("INPUT")
			var option3=document.createElement("INPUT")
			
			option1.setAttribute("value","iPad Air")
			option1.setAttribute("type","radio")
			option1.setAttribute("name","shipoptions")
			option1.setAttribute("id","optionbutton1")
			
			option2.setAttribute("value","iPad Pro")
			option2.setAttribute("type","radio")
			option2.setAttribute("name","shipoptions")
			option2.setAttribute("id","optionbutton2")
			
			option3.setAttribute("value","iPad Mini")
			option3.setAttribute("type","radio")
			option3.setAttribute("name","shipoptions")
			option3.setAttribute("id","optionbutton3")
			
			text1.innerHTML+="<font face=neou size=2 color=white> iPad Air"
			text2.innerHTML+="<font face=neou size=2 color=white> iPad Pro"
			text3.innerHTML+="<font face=neou size=2 color=white> iPad Mini"
			
			text1.appendChild(option1)
			text2.appendChild(option2)
			text3.appendChild(option3)
			
			document.getElementById("options").appendChild(text1)
			document.getElementById("options").appendChild(text2)
			document.getElementById("options").appendChild(text3)
			
			clicked=2
		}
		
		if(product=="iPhone"&&clicked!=3)
		{
			var text1=document.createElement("Label")
			text1.setAttribute("id","Label1")
			var text2=document.createElement("Label")
			text2.setAttribute("id","Label2")
			var text3=document.createElement("Label")
			text3.setAttribute("id","Label3")
			
			var option1=document.createElement("INPUT")
			var option2=document.createElement("INPUT")
			var option3=document.createElement("INPUT")
			
			option1.setAttribute("value","iPhone 7")
			option1.setAttribute("type","radio")
			option1.setAttribute("name","shipoptions")
			option1.setAttribute("id","optionbutton1")
			
			option2.setAttribute("value","iPhone 8")
			option2.setAttribute("type","radio")
			option2.setAttribute("name","shipoptions")
			option2.setAttribute("id","optionbutton2")
			
			option3.setAttribute("value","iPhone X")
			option3.setAttribute("type","radio")
			option3.setAttribute("name","shipoptions")
			option3.setAttribute("id","optionbutton3")
			
			text1.innerHTML+="<font face=neou size=2 color=white> iPhone 7"
			text2.innerHTML+="<font face=neou size=2 color=white> iPhone 8"
			text3.innerHTML+="<font face=neou size=2 color=white> iPhone X"
			
			text1.appendChild(option1)
			text2.appendChild(option2)
			text3.appendChild(option3)
			
			document.getElementById("options").appendChild(text1)
			document.getElementById("options").appendChild(text2)
			document.getElementById("options").appendChild(text3)
			
			clicked=3
		}
		
		if(product=="MacBook"&&clicked!=4)
		{
			var text1=document.createElement("Label")
			text1.setAttribute("id","Label1")
			var text2=document.createElement("Label")
			text2.setAttribute("id","Label2")
			var text3=document.createElement("Label")
			text3.setAttribute("id","Label3")
			
			var option1=document.createElement("INPUT")
			var option2=document.createElement("INPUT")
			var option3=document.createElement("INPUT")
			
			option1.setAttribute("value","Macbook Air")
			option1.setAttribute("type","radio")
			option1.setAttribute("name","shipoptions")
			option1.setAttribute("id","optionbutton1")
			
			option2.setAttribute("value","Macbook Pro 13 inch")
			option2.setAttribute("type","radio")
			option2.setAttribute("name","shipoptions")
			option2.setAttribute("id","optionbutton2")
			
			option3.setAttribute("value","Macbook Pro 15 inch")
			option3.setAttribute("type","radio")
			option3.setAttribute("name","shipoptions")
			option3.setAttribute("id","optionbutton3")
			
			text1.innerHTML+="<font face=neou size=2 color=white> Macbook Air"
			text2.innerHTML+="<font face=neou size=2 color=white> Macbook Pro 13 inch"
			text3.innerHTML+="<font face=neou size=2 color=white> Macbook Pro 15 inch"
			
			text1.appendChild(option1)
			text2.appendChild(option2)
			text3.appendChild(option3)
			
			document.getElementById("options").appendChild(text1)
			document.getElementById("options").appendChild(text2)
			document.getElementById("options").appendChild(text3)
			
			clicked=4
		}	
	}
}	

function shippingDetails(number)
{
	var shipProduct=document.calculator.shipoptions.value
	var cityOptions=document.calculator.locations.value
	var productSelect=document.calculator.ProductNames.value
	
	if(cityOptions=="default"||productSelect=="default")
	{
		alert("Do not leave options unchecked")	
	}
	else
	{
		if(shipProduct=="8-core" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1300/-"
		}
		else if(shipProduct=="8-core" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1350/-"
		}
		else if(shipProduct=="8-core" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1280/-"
		}
		else if(shipProduct=="8-core" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1450 /-"
		}
		
		if(shipProduct == "10-core" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1300 /-"
		}
		else if(shipProduct == "10-core" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1450 /-"
		}
		else if(shipProduct == "10-core" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1500 /-"
		}
		else if(shipProduct == "10-core" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1650 /-"
		}
		
		if(shipProduct == "18-core" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1300 /-"
		}
		else if(shipProduct == "18-core" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1500 /-"
		}
		else if(shipProduct == "18-core" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1430 /-"
		}
		else if(shipProduct == "18-core" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1480 /-"
		}
		
		
		if(shipProduct == "iPad Air" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 250 /-"
		}
		else if(shipProduct == "iPad Air" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 400 /-"
		}
		else if(shipProduct == "iPad Air" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 310 /-"
		}
		else if(shipProduct == "iPad Air" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 429 /-"
		}
		
		if(shipProduct == "iPad Pro" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 300 /-"
		}
		else if(shipProduct == "iPad Pro" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 450 /-"
		}
		else if(shipProduct == "iPad Pro" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 510 /-"
		}
		else if(shipProduct == "iPad Pro" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 650 /-"
		}
		
		if(shipProduct == "iPad Mini" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 300 /-"
		}	
		else if(shipProduct == "iPad Mini" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 500 /-"
		}
        else if(shipProduct == "iPad Mini" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 234 /-"
		}
		else if(shipProduct == "iPad Mini" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 535 /-"
		}
		
		
		if(shipProduct == "iPhone 7" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 600 /-"
		}
		else if(shipProduct == "iPhone 7" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 550 /-"
		}
		else if(shipProduct == "iPhone 7" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 450 /-"
		}
		else if(shipProduct == "iPhone 7" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 237 /-"
		}
		
		if(shipProduct == "iPhone 8" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 650 /-"
		}
		else if(shipProduct == "iPhone 8" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 800 /-"
		}
		else if(shipProduct == "iPhone 8" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 779 /-"
		}
		else if(shipProduct == "iPhone 8" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 645 /-"
		}
		
		if(shipProduct == "iPhone X" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1000 /-"	
		}
		else if(shipProduct == "iPhone X" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 600 /-"
		}
		else if(shipProduct == "iPhone X" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 550 /-"
		}
		else if(shipProduct == "iPhone X" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 457 /-"
		}
		
		if(shipProduct == "Macbook Air" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1200 /-"
		}
		else if(shipProduct == "Macbook Air" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1098 /-"
		}
		else if(shipProduct == "Macbook Air" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1120 /-"
		}
		else if(shipProduct == "Macbook Air" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1300 /-"
		}
		
		if(shipProduct == "Macbook Pro 13 inch" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1000 /-"
		}
		else if(shipProduct == "Macbook Pro 13 inch" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1100 /-"
		}
		else if(shipProduct == "Macbook Pro 13 inch" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 980 /-"
		}
		else if(shipProduct == "Macbook Pro 13 inch" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 978 /-"
		}
		
		
		if(shipProduct == "Macbook Pro 15 inch" && cityOptions=="Mumbai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1800 /-"
		}
		else if(shipProduct == "Macbook Pro 15 inch" && cityOptions=="Delhi")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1500 /-"
		}
		else if(shipProduct == "Macbook Pro 15 inch" && cityOptions=="Bangalore")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 984 /-"
		}
		else if(shipProduct == "Macbook Pro 15 inch" && cityOptions=="Chennai")
		{
			document.calculator.txtshipping.value = "Shipping Cost for this product is Rs 1467 /-"
		}
	}
}

var usernames=["default","admin"]
var passwords=["default","admin"]
var fullnames=["Mr Default","Mr Admin"]
var loginStatus=0

function loginPage()
{
	var usernameField=document.login.txtusername.value
	var passwordField=document.login.txtpassword.value
	
	var nullStatus=1
	
	for(i=0;i<usernames.length;i++)
	{
		if(usernameField==usernames[i]&&passwordField==passwords[i])
		{
			loginStatus=1
			nullStatus=0
			alert("You have successfully logged in"+loginStatus)
			break
		}
		else
		{
			nullStatus=1
		}
	}
	if(nullStatus==1)
	{
		alert("You've entered an incorrect username or password")
	}
}
	
function LoginButton()
{
	if(loginStatus!=1)
	{
		document.getElementsByTagName("Object")[0].setAttribute("data","Login Page.html")
	}
	else if(loginStatus==1)
	{
		alert("You are already logged in")
	}
}
var passwordcount=0
	var usernamecount=0
	
	var passwordflag=0
	var usernameflag=0
function registrationForm()
{
	var usernameReg=document.registration.txtusernamereg.value
	var passwordReg1=document.registration.txtpasswordreg.value
	var passwordReg2=document.registration.txtpasswordconfirm.value
	var fullNameReg=document.registration.txtfullname.value
	var UserArrayLength=usernames.length
	var PasswordArrayLength=passwords.length
	
	if(passwordReg1!=""&&passwordReg2!="")
	{
		if(passwordReg1!=passwordReg2)
		{
			alert("Your passwords do not match")
		}
		else if(passwordReg1.length>8)
		{
			for(j=0;j<passwordReg1.length;j++)
			{
				var asciiValue=passwordReg1.charCodeAt(j)
				if(asciiValue>=48&&asciiValue<=57)
				{
					passwordcount=passwordcount+1
				}		
			}
			if(passwordcount>=2)
			{
				passwordflag=passwordflag+1
			}
			else
			{
				alert("Password needs to have at least 2 numbers")
			}
		}
		else if(passwordReg1.length<8)
		{
			alert("Password needs to be longer than 8 characters")
		}
	}
	else
	{
		alert("Dont leave password fields blank")
	}
	
	if(usernameReg!="")
	{
		for(i=0;i<UserArrayLength;i++)
		{
			if(usernames[i]==usernameReg)
			{
				alert("Username is already taken")
				break
			}
			else
			{
				usernamecount=usernamecount+1
			}
		}
		if(usernamecount==UserArrayLength)
		{
			usernameflag=usernameflag+1
		}
	}
	else
	{
		alert("Dont leave username field blank")
	}
	
	if(fullNameReg!="")
	{
		fullnames[fullnames.length]=fullNameReg
	}
	else 
	{
		alert("Dont leave the name field blank")
	}
	
	if(passwordflag==1&&usernameflag==1)
	{
		usernames[UserArrayLength]=usernameReg
		passwords[PasswordArrayLength]=passwordReg1	
	}
	alert("List of usernames: "+usernames+" List of passwords: "+passwords)
	/*document.write("<table width=100% border=0 cellpadding=30px><tr><td colspan=2><font face=Neoteric size=30px color=white><center>ACCOUNT DETAILS</td></tr>")
	document.write("<tr><td><center><font face=Neou size=5 color=white>Username</font></td><td><center><font face=Neou size=5 color=white>"+usernameReg+"</td></tr>")
	document.write("<tr><td><center><font face=Neou size=5 color=white>Password</font></td><td><center><font face=Neou size=5 color=white>"+passwordReg1+"</td></tr>")
	document.write("<tr><td><font face=Neou size=5 color=white><center>Full Name</font></td><td><center><font face=Neou size=5 color=white>"+fullNameReg+"</td></tr></table>")*/
}	

function CategoriesPage(categoryImage)
{
	if(categoryImage=="MacBook")
	{
		window.location.assign("Macbook Product Page.html")
	}
	else if(categoryImage=="Mac")
	{
		window.location.assign("Mac Product Page.html")
	}
	else if(categoryImage=="iPad")
	{
		window.location.assign("iPad Product Page.html")
	}
	else if(categoryImage=="iPhone")
	{
		window.location.assign("iPhone Product Page.html")
	}
}

function ProductSelect()
{
	var productName=document.MacbookForm.Macbookbtn.value
	var objectTag=document.getElementById("productcontent")
	
	if(productName=="Macbook Air")
	{
		objectTag.setAttribute("data", "Macbook Air Product OPtions.html")
		document.images[0].src="Macbook Air Front.jpg"
		document.images[0].width="554"
		document.images[0].height="357"
		
		document.images[1].src="Macbook Air Back.jpg"
		document.images[1].width="155"
		document.images[1].height="100"
		
		document.images[2].src="Macbook Air Side.jpg"
		document.images[2].width="155"
		document.images[2].height="100"
		
		document.images[3].src="Macbook Air Keyboard.jpg"
		document.images[3].width="155"
		document.images[3].height="100"
	}
	
	if(productName=="Macbook Pro 13 inch")
	{
		objectTag.setAttribute("data", "Macbook Pro 13 inch Product Options.html")
		document.images[0].src="Macbook pro 13 inch Front.jpg"
		document.images[0].width="554"
		document.images[0].height="357"
		
		document.images[1].src="Macbook pro 13 inch Back.jpg"
		document.images[1].width="155"
		document.images[1].height="100"
		
		document.images[2].src="Macbook pro 13 inch Side.jpg"
		document.images[2].width="155"
		document.images[2].height="100"
		
		document.images[3].src="Macbook pro 13 inch Touchbar.jpg"
		document.images[3].width="155"
		document.images[3].height="100"
	}
	
	if(productName=="Macbook Pro 15 inch")
	{
		objectTag.setAttribute("data", "Macbook Pro 15 inch Product Options.html")
		document.images[0].src="Macbook pro 15 inch Front.jpg"
		document.images[0].width="554"
		document.images[0].height="357"
		
		document.images[1].src="Macbook pro 15 inch Back.jpg"
		document.images[1].width="155"
		document.images[1].height="100"
		
		document.images[2].src="Macbook pro 15 inch Side.jpg"
		document.images[2].width="155"
		document.images[2].height="100"
		
		document.images[3].src="Macbook pro 15 inch Touchbar.jpg"
		document.images[3].width="155"
		document.images[3].height="100"
	}
	
	if(productName=="iMac Pro")
	{
		objectTag.setAttribute("data", "iMac Pro Product Options.html")
		document.images[0].src="iMac Pro Front.webp"
		document.images[0].width="554"
		document.images[0].height="357"
		
		document.images[1].src="iMac Pro Back.webp"
		document.images[1].width="160"
		document.images[1].height="90"
		
		document.images[2].src="iMac Pro Side.webp"
		document.images[2].width="160"
		document.images[2].height="90"
		
		document.images[3].src="iMac Pro Keyboard.webp"
		document.images[3].width="160"
		document.images[3].height="90"
	}
	
	if(productName=="Mac Pro")
	{
		objectTag.setAttribute("data", "Mac Pro Product Options.html")
		document.images[0].src="Mac Pro Top.jpg"
		document.images[0].width="521"
		document.images[0].height="293"
		
		document.images[1].src="Mac Pro Ports.jpg"
		document.images[1].width="154"
		document.images[1].height="87"
		
		document.images[2].src="Mac Pro Side.jpg"
		document.images[2].width="154"
		document.images[2].height="89"
		
		document.images[3].src="Mac Pro Back.jpg"
		document.images[3].width="154"
		document.images[3].height="87"
	}
	
	if(productName=="iMac 5k")
	{
		objectTag.setAttribute("data", "iMac 5k Product Options.html")
		document.images[0].src="iMac 5k Front.jpg"
		document.images[0].width="521"
		document.images[0].height="293"
		
		document.images[1].src="iMac 5k Back.jpg"
		document.images[1].width="150"
		document.images[1].height="84"
		
		document.images[2].src="iMac 5k Side.jpg"
		document.images[2].width="150"
		document.images[2].height="84"
		
		document.images[3].src="iMac 5k Keyboard.jpg"
		document.images[3].width="150"
		document.images[3].height="84"
	}
	
	if(productName=="iPad Pro")
	{
		objectTag.setAttribute("data", "iPad Pro Product Options.html")
		document.images[0].src="iPad Pro Front.jpg"
		document.images[0].width="554"
		document.images[0].height="357"
		
		document.images[1].src="iPad Pro Back.jpg"
		document.images[1].width="155"
		document.images[1].height="100"
		
		document.images[2].src="iPad Pro Side.jpg"
		document.images[2].width="155"
		document.images[2].height="100"
		
		document.images[3].src="iPad Pro Screen.jpg"
		document.images[3].width="155"
		document.images[3].height="100"
	}
	
	if(productName=="iPad Air")
	{
		objectTag.setAttribute("data", "iPad Air Product Options.html")
		document.images[0].src="iPad Air Front.jpg"
		document.images[0].width="554"
		document.images[0].height="357"
		
		document.images[1].src="iPad Air Back.jpg"
		document.images[1].width="155"
		document.images[1].height="100"
		
		document.images[2].src="iPad Air Speaker.jpg"
		document.images[2].width="155"
		document.images[2].height="100"
		
		document.images[3].src="iPad Air Home Button.jpg"
		document.images[3].width="155"
		document.images[3].height="100"
	}
	
	if(productName=="iPad Mini")
	{
		objectTag.setAttribute("data", "iPad Mini Product Options.html")
		document.images[0].src="iPad Mini Front.jpg"
		document.images[0].width="521"
		document.images[0].height="293"
		
		document.images[1].src="iPad Mini Back.jpg"
		document.images[1].width="150"
		document.images[1].height="84"
		
		document.images[2].src="iPad Mini Side.jpg"
		document.images[2].width="150"
		document.images[2].height="84"
		
		document.images[3].src="iPad Mini Home Button.jpg"
		document.images[3].width="150"
		document.images[3].height="84"
	}
	
	if(productName=="iPhone 7")
	{
		objectTag.setAttribute("data", "iPhone 7 Product Options.html")
		document.images[0].src="iPhone 7 Front.jpg"
		document.images[0].width="554"
		document.images[0].height="293"
		
		document.images[1].src="iPhone 7 Bottom.jpg"
		document.images[1].width="154"
		document.images[1].height="87"
		
		document.images[2].src="iPhone 7 Side.jpg"
		document.images[2].width="154"
		document.images[2].height="87"
		
		document.images[3].src="iPhone 7 Back.jpg"
		document.images[3].width="154"
		document.images[3].height="87"
	}
	
	if(productName=="iPhone 8")
	{
		objectTag.setAttribute("data", "iPhone 8 Product Options.html")
		document.images[0].src="iPhone 8 Front.jpg"
		document.images[0].width="553"
		document.images[0].height="369"
		
		document.images[1].src="iPhone 8 Back.jpg"
		document.images[1].width="156"
		document.images[1].height="104"
		
		document.images[2].src="iPhone 8 Back 2.jpg"
		document.images[2].width="156"
		document.images[2].height="104"
		
		document.images[3].src="iPhone 8 Home Button.jpg"
		document.images[3].width="156"
		document.images[3].height="104"
	}
	
	if(productName=="iPhone X")
	{
		objectTag.setAttribute("data", "iPhone X Product Options.html")
		document.images[0].src="iPhone X Front.jpg"
		document.images[0].width="541"
		document.images[0].height="304"
		
		document.images[1].src="iPhone X Side 1.jpg"
		document.images[1].width="154"
		document.images[1].height="87"
		
		document.images[2].src="iPhone X Side 2.jpg"
		document.images[2].width="154"
		document.images[2].height="87"
		
		document.images[3].src="iPhone X Screen.jpg"
		document.images[3].width="154"
		document.images[3].height="87"
	}
}

function imageSwap(num)
{
	var Main=document.images[0].src
	var image1=document.images[1].src
	var image2=document.images[2].src
	var image3=document.images[3].src
	var temp=document.images[0].src

	if(image1=="file:///C:/Users/Aditya%20Singh/Documents/HTML/Assignment/Blank%20Square%201.png"||image2=="file:///C:/Users/Aditya%20Singh/Documents/HTML/Assignment/Blank%20Square%202.png"||image3=="file:///C:/Users/Aditya%20Singh/Documents/HTML/Assignment/Blank%20Square%203.png")
	{
		image1=document.images[1].src
	}
	
	else
	{
		if(num==0)
		{
			document.images[0].src=image1
			document.images[1].src=temp
		}
		if(num==1)
		{
			document.images[0].src=image2
			document.images[2].src=temp
		}
		if(num==2)
		{
			document.images[0].src=image3
			document.images[3].src=temp
		}	
		if(num==3)
		{
			document.images[0].src=image1
			document.images[1].src=temp
		}
		if(num==4)
		{
			document.images[0].src=image2
			document.images[2].src=temp
		}
		if(num==5)
		{
			document.images[0].src=image3
			document.images[3].src=temp
		}	
	}
}
var clickbtn=0
function productExchange()
{
	var oldProduct=document.exchangeForm.oldProduct.value
	var parentnode=document.getElementById("options")
	
	if(clickbtn!=0)
	{		
			var button1=document.getElementById("Label1")
			var button2=document.getElementById("Label2")
			var button3=document.getElementById("Label3")
			parentnode.removeChild(button1)
			parentnode.removeChild(button2)
			parentnode.removeChild(button3)
			clickbtn=0
	}
	
	if(oldProduct=="Mac"&&clickbtn!=1)
	{
		var text1=document.createElement("Label")
		text1.setAttribute("id","Label1")
		var text2=document.createElement("Label")
		text2.setAttribute("id","Label2")
		var text3=document.createElement("Label")
		text3.setAttribute("id","Label3")
			
		var option1=document.createElement("INPUT")
		var option2=document.createElement("INPUT")
		var option3=document.createElement("INPUT")
			
		option1.setAttribute("value","Mac Pro")
		option1.setAttribute("type","radio")
		option1.setAttribute("name","optionbtn")
		option1.setAttribute("id","optionbutton1")
			
		option2.setAttribute("value","iMac Pro")
		option2.setAttribute("type","radio")
		option2.setAttribute("name","optionbtn")
		option2.setAttribute("id","optionbutton2")
			
		option3.setAttribute("value","iMac 5k")
		option3.setAttribute("type","radio")
		option3.setAttribute("name","optionbtn")
		option3.setAttribute("id","optionbutton3")
			
		text1.innerHTML+="<font face=neou size=2 color=white> Mac Pro"
		text2.innerHTML+="<font face=neou size=2 color=white> iMac Pro"
		text3.innerHTML+="<font face=neou size=2 color=white> iMac 5k"
			
		text1.appendChild(option1)
		text2.appendChild(option2)
		text3.appendChild(option3)
			
		document.getElementById("options").appendChild(text1)
		document.getElementById("options").appendChild(text2)
		document.getElementById("options").appendChild(text3)
			
		clickbtn=1
	}
	
	if(oldProduct=="Macbook"&&clickbtn!=2)
	{
		var text1=document.createElement("Label")
		text1.setAttribute("id","Label1")
		var text2=document.createElement("Label")
		text2.setAttribute("id","Label2")
		var text3=document.createElement("Label")
		text3.setAttribute("id","Label3")
			
		var option1=document.createElement("INPUT")
		var option2=document.createElement("INPUT")
		var option3=document.createElement("INPUT")
			
		option1.setAttribute("value","Macbook Air")
		option1.setAttribute("type","radio")
		option1.setAttribute("name","optionbtn")
		option1.setAttribute("id","optionbutton1")
			
		option2.setAttribute("value","Macbook Pro 13 inch")
		option2.setAttribute("type","radio")
		option2.setAttribute("name","optionbtn")
		option2.setAttribute("id","optionbutton2")
			
		option3.setAttribute("value","Macbook Pro 15 inch")
		option3.setAttribute("type","radio")
		option3.setAttribute("name","optionbtn")
		option3.setAttribute("id","optionbutton3")
			
		text1.innerHTML+="<font face=neou size=2 color=white> Macbook Air"
		text2.innerHTML+="<font face=neou size=2 color=white> Macbook Pro 13 inch"
		text3.innerHTML+="<font face=neou size=2 color=white> Macbook Pro 15 inch"
			
		text1.appendChild(option1)
		text2.appendChild(option2)
		text3.appendChild(option3)
			
		document.getElementById("options").appendChild(text1)
		document.getElementById("options").appendChild(text2)
		document.getElementById("options").appendChild(text3)
			
		clickbtn=2
	}
	
	if(oldProduct=="iPad"&&clickbtn!=3)
	{
		var text1=document.createElement("Label")
		text1.setAttribute("id","Label1")
		var text2=document.createElement("Label")
		text2.setAttribute("id","Label2")
		var text3=document.createElement("Label")
		text3.setAttribute("id","Label3")
			
		var option1=document.createElement("INPUT")
		var option2=document.createElement("INPUT")
		var option3=document.createElement("INPUT")
			
		option1.setAttribute("value","iPad Pro")
		option1.setAttribute("type","radio")
		option1.setAttribute("name","optionbtn")
		option1.setAttribute("id","optionbutton1")
			
		option2.setAttribute("value","iPad Air")
		option2.setAttribute("type","radio")
		option2.setAttribute("name","optionbtn")
		option2.setAttribute("id","optionbutton2")
			
		option3.setAttribute("value","iPad Mini")
		option3.setAttribute("type","radio")
		option3.setAttribute("name","optionbtn")
		option3.setAttribute("id","optionbutton3")
			
		text1.innerHTML+="<font face=neou size=2 color=white> iPad Pro"
		text2.innerHTML+="<font face=neou size=2 color=white> iPad Air"
		text3.innerHTML+="<font face=neou size=2 color=white> iPad Mini"
			
		text1.appendChild(option1)
		text2.appendChild(option2)
		text3.appendChild(option3)
			
		document.getElementById("options").appendChild(text1)
		document.getElementById("options").appendChild(text2)
		document.getElementById("options").appendChild(text3)
			
		clickbtn=3
	}
	
	if(oldProduct=="iPhone"&&clickbtn!=4)
	{
		var text1=document.createElement("Label")
		text1.setAttribute("id","Label1")
		var text2=document.createElement("Label")
		text2.setAttribute("id","Label2")
		var text3=document.createElement("Label")
		text3.setAttribute("id","Label3")
			
		var option1=document.createElement("INPUT")
		var option2=document.createElement("INPUT")
		var option3=document.createElement("INPUT")
			
		option1.setAttribute("value","iPhone 7")
		option1.setAttribute("type","radio")
		option1.setAttribute("name","optionbtn")
		option1.setAttribute("id","optionbutton1")
			
		option2.setAttribute("value","iPhone 8")
		option2.setAttribute("type","radio")
		option2.setAttribute("name","optionbtn")
		option2.setAttribute("id","optionbutton2")
			
		option3.setAttribute("value","iPhone X")
		option3.setAttribute("type","radio")
		option3.setAttribute("name","optionbtn")
		option3.setAttribute("id","optionbutton3")
			
		text1.innerHTML+="<font face=neou size=2 color=white> iPhone 7"
		text2.innerHTML+="<font face=neou size=2 color=white> iPhone 8"
		text3.innerHTML+="<font face=neou size=2 color=white> iPhone X"
			
		text1.appendChild(option1)
		text2.appendChild(option2)
		text3.appendChild(option3)
			
		document.getElementById("options").appendChild(text1)
		document.getElementById("options").appendChild(text2)
		document.getElementById("options").appendChild(text3)
			
		clickbtn=4
	}
}

function exchangeCalculator()
{
	var oldProducts=document.exchangeForm.oldProduct.value
	var purchaseYear=document.exchangeForm.PurchaseYear.value
	var newProduct=document.exchangeForm.optionbtn.value
	
	if(purchaseYear=="2016"&&newProduct=="iMac Pro")
	{
		document.exchangeForm.txtfinalprice.value="20000"
	}
	else if(purchaseYear=="2015"&&newProduct=="iMac Pro")
	{
		document.exchangeForm.txtfinalprice.value="17000"
	}
	else if(purchaseYear=="2014"&&newProduct=="iMac Pro")
	{
		document.exchangeForm.txtfinalprice.value="16000"
	}
	else if(purchaseYear=="2013"&&newProduct=="iMac Pro")
	{
		document.exchangeForm.txtfinalprice.value="15000"
	}
    
	if(purchaseYear=="2016"&&newProduct=="Mac Pro")
	{
		document.exchangeForm.txtfinalprice.value="9000"
	}
	else if(purchaseYear=="2015"&&newProduct=="Mac Pro")
	{
		document.exchangeForm.txtfinalprice.value="8500"
	}
	else if(purchaseYear=="2014"&&newProduct=="Mac Pro")
	{
		document.exchangeForm.txtfinalprice.value="8000"
	}
	else if(purchaseYear=="2013"&&newProduct=="Mac Pro")
	{
		document.exchangeForm.txtfinalprice.value="7800"
	}
	
	if(purchaseYear=="2016"&&newProduct=="iMac 5K")
	{
		document.exchangeForm.txtfinalprice.value="7000"
	}
	else if(purchaseYear=="2015"&&newProduct=="iMac 5K")
	{
		document.exchangeForm.txtfinalprice.value="6800"
	}
	else if(purchaseYear=="2014"&&newProduct=="iMac 5K")
	{
		document.exchangeForm.txtfinalprice.value="6500"
	}
	else if(purchaseYear=="2013"&&newProduct=="iMac 5K")
	{
		document.exchangeForm.txtfinalprice.value="6000"
	}
	
	if(purchaseYear=="2016"&&newProduct=="Macbook Air")
	{
		document.exchangeForm.txtfinalprice.value="8000"
	}
	else if(purchaseYear=="2015"&&newProduct=="Macbook Air")
	{
		document.exchangeForm.txtfinalprice.value="7500"
	}
	else if(purchaseYear=="2014"&&newProduct=="Macbook Air")
	{
		document.exchangeForm.txtfinalprice.value="7000"
	}
	else if(purchaseYear=="2013"&&newProduct=="Macbook Air")
	{
		document.exchangeForm.txtfinalprice.value="6500"
	}
	
	if(purchaseYear=="2016"&&newProduct=="Macbook Pro 13 inch")
	{
		document.exchangeForm.txtfinalprice.value="10000"
	}
	else if(purchaseYear=="2015"&&newProduct=="Macbook Pro 13 inch")
	{
		document.exchangeForm.txtfinalprice.value="9000"
	}
	else if(purchaseYear=="2014"&&newProduct=="Macbook Pro 13 inch")
	{
		document.exchangeForm.txtfinalprice.value="8800"
	}
	else if(purchaseYear=="2013"&&newProduct=="Macbook Pro 13 inch")
	{
		document.exchangeForm.txtfinalprice.value="8500"
	}
	
	if(purchaseYear=="2016"&&newProduct=="Macbook Pro 15 inch")
	{
		document.exchangeForm.txtfinalprice.value="12000"
	}
	else if(purchaseYear=="2015"&&newProduct=="Macbook Pro 15 inch")
	{
		document.exchangeForm.txtfinalprice.value="11000"
	}
	else if(purchaseYear=="2014"&&newProduct=="Macbook Pro 15 inch")
	{
		document.exchangeForm.txtfinalprice.value="10500"
	}
	else if(purchaseYear=="2013"&&newProduct=="Macbook Pro 15 inch")
	{
		document.exchangeForm.txtfinalprice.value="10000"
	}
	
	if(purchaseYear=="2016"&&newProduct=="iPhone 7")
	{
		document.exchangeForm.txtfinalprice.value="5000"
	}
	else if(purchaseYear=="2015"&&newProduct=="iPhone 7")
	{
		document.exchangeForm.txtfinalprice.value="4000"
	}
	else if(purchaseYear=="2014"&&newProduct=="iPhone 7")
	{
		document.exchangeForm.txtfinalprice.value="3500"
	}
	else if(purchaseYear=="2013"&&newProduct=="iPhone 7")
	{
		document.exchangeForm.txtfinalprice.value="3000"
	}
	
	if(purchaseYear=="2016"&&newProduct=="iPhone 8")
	{
		document.exchangeForm.txtfinalprice.value="7000"
	}
	else if(purchaseYear=="2015"&&newProduct=="iPhone 8")
	{
		document.exchangeForm.txtfinalprice.value="9000"
	}
	else if(purchaseYear=="2014"&&newProduct=="iPhone 8")
	{
		document.exchangeForm.txtfinalprice.value="8700"
	}
	else if(purchaseYear=="2013"&&newProduct=="iPhone 8")
	{
		document.exchangeForm.txtfinalprice.value="8500"
	}
	
	if(purchaseYear=="2016"&&newProduct=="iPhone X")
	{
		document.exchangeForm.txtfinalprice.value="11000"
	}
	else if(purchaseYear=="2015"&&newProduct=="iPhone X")
	{
		document.exchangeForm.txtfinalprice.value="10000"
	}
	else if(purchaseYear=="2014"&&newProduct=="iPhone X")
	{
		document.exchangeForm.txtfinalprice.value="9500"
	}
	else if(purchaseYear=="2015"&&newProduct=="iPhone X")
	{
		document.exchangeForm.txtfinalprice.value="9000"
	}
	
}

function productPrice(name)
{
	var product1=/Air 2017/
	var product2=/Air 2016/
	var product3=/Pro 13 inch TB/
	var product4=/Pro 13 inch NTB/
	var product5=/Pro 15 inch TB/
	var product6=/Pro 15 inch NTB/
	var product7=/10-core iMac/
	var product8=/14-core iMac/
	var product9=/18-core iMac/
	var product10=/6-core Mac/
	var product11=/8-core Mac/
	var product12=/10-core Mac/
	var product13=/i7 nGPU/
	var product14=/i7 RX 580/
	var product15=/i7 RX Vega/
	var product16=/9.7 inch Pro/
	var product17=/10.5 inch Pro/
	var product18=/12.9 inch Pro/
	var product19=/32 GB Air/
	var product20=/64 GB Air/
	var product21=/128 GB Air/
	var product22=/32 GB Mini/
	var product23=/64 GB Mini/
	var product24=/128 GB Mini/
	var product25=/64 GB 7/
	var product26=/128 GB 7/
	var product27=/256 GB 7/
	var product28=/64 GB 8/
	var product29=/128 GB 8/
	var product30=/256 GB 8/
	var product31=/64 GB X/
	var product32=/256 GB X/
	
	if(product1.test(name)==true)
		document.productoptions.txtprice.value="Rs 80,000"
	else if(product2.test(name)==true)
		document.productoptions.txtprice.value="Rs 75,000"
	
	if(product3.test(name)==true)
		document.productoptions.txtprice.value="Rs 105,000"
	else if(product4.test(name)==true)
		document.productoptions.txtprice.value="Rs 98,000"
	
	if(product5.test(name)==true)
		document.productoptions.txtprice.value="Rs 145,000"
	else if(product6.test(name)==true)
		document.productoptions.txtprice.value="Rs 125,000"
	
	if(product7.test(name)==true)
		document.productoptions.txtprice.value="Rs 280,000"
	else if(product8.test(name)==true)
		document.productoptions.txtprice.value="Rs 320,000"
	else if(product9.test(name)==true)
		document.productoptions.txtprice.value="Rs 380,000"

	if(product10.test(name)==true)
		document.productoptions.txtprice.value="Rs 220,000"
	else if(product11.test(name)==true)
		document.productoptions.txtprice.value="Rs 250,000"
	else if(product12.test(name)==true)
		document.productoptions.txtprice.value="Rs 280,000"
	
	if(product13.test(name)==true)
		document.productoptions.txtprice.value="Rs 170,000"
	else if(product14.test(name)==true)
		document.productoptions.txtprice.value="Rs 190,000"
	else if(product15.test(name)==true)
		document.productoptions.txtprice.value="Rs 220,000"
	
	if(product16.test(name)==true)
		document.productoptions.txtprice.value="Rs 85,000"
	else if(product17.test(name)==true)
		document.productoptions.txtprice.value="Rs 94,000"
	else if(product18.test(name)==true)
		document.productoptions.txtprice.value="Rs 102,000"
	
	if(product19.test(name)==true)
		document.productoptions.txtprice.value="Rs 72,000"
	else if(product20.test(name)==true)
		document.productoptions.txtprice.value="Rs 77,000"
	else if(product21.test(name)==true)
		document.productoptions.txtprice.value="Rs 82,000"	

	if(product22.test(name)==true)
		document.productoptions.txtprice.value="Rs 53,000"
	else if(product23.test(name)==true)
		document.productoptions.txtprice.value="Rs 58,000"
	else if(product24.test(name)==true)
		document.productoptions.txtprice.value="Rs 61,000"	
	
	if(product25.test(name)==true)
		document.productoptions.txtprice.value="Rs 51,000"
	else if(product26.test(name)==true)
		document.productoptions.txtprice.value="Rs 53,000"
	else if(product27.test(name)==true)
		document.productoptions.txtprice.value="Rs 55,000"	
	
	if(product28.test(name)==true)
		document.productoptions.txtprice.value="Rs 63,000"
	else if(product29.test(name)==true)
		document.productoptions.txtprice.value="Rs 65,000"
	else if(product30.test(name)==true)
		document.productoptions.txtprice.value="Rs 68,000"	
	
	if(product31.test(name)==true)
		document.productoptions.txtprice.value="Rs 88,000"
	else if(product32.test(name)==true)
		document.productoptions.txtprice.value="Rs 97,000"
}

var counter=0
function newProducts()
{
	var imagePath=document.images[0].src
	var productInfo=document.getElementById("newproducttext")
	
	if(counter==0)
	{
		document.images[0].src="new_2017_imac_pro_dark_grey_front 2.png"
		productInfo.setAttribute("data","iMac Pro new product text.html")
		counter=counter+1
	}
	
	else if(counter==1)
	{
		document.images[0].src="Macbook pro 15 inch Front.jpg"
		productInfo.setAttribute("data","Macbook pro new product text.html")
		counter=counter+1
	}
	
	else if(counter==2)
	{
		document.images[0].src="iPhone X Front.jpg"
		productInfo.setAttribute("data","iPhone X new product text.html")
		counter=0
	}
	setTimeout(newProducts,5000)
}	