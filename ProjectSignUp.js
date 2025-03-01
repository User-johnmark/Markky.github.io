function toggleMenu(){
    document.getElementById("nav-list").classList.toggle("active");
}

document.getElementById("show-register").addEventListener("click", function() {
    document.getElementById("login-box").style.display = "none";
    document.getElementById("registration-box").style.display = "block";
});
		
document.getElementById("show-login").addEventListener("click", function() {
    document.getElementById("registration-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
});
		
		
					document.getElementById("registration-form").addEventListener("submit", function(event) {
            event.preventDefault();
							const registerFname = document.getElementById('register-fname').value;
							const registerLname = document.getElementById('register-lname').value;
            const registerEmail = document.getElementById('register-email').value;
            const registerPassword = document.getElementById('register-password').value;
							const registerConfirmPassword =
							document.getElementById('register-Confirmpassword').value;
						
							
				if (registerPassword === registerConfirmPassword) {
        localStorage.setItem('registerEmail', registerEmail);
        localStorage.setItem('registerPassword', registerPassword);
				    alert("Registered successfully.");
						
        document.getElementById("registration-box").style.display = "none";
        document.getElementById("login-box").style.display = "block";
    } else {
        alert("Password does not match.");
    }
        });
		
		
		document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();
				
            const loginEmail = document.getElementById('login-email').value;
            const loginPassword = document.getElementById('login-pa').value;
		});
		
		
		
		document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const loginEmail = document.getElementById('login-email').value;
        const loginPassword = document.getElementById('login-password').value;

        const storedEmail = localStorage.getItem('registerEmail');
        const storedPassword = localStorage.getItem('registerPassword');

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            window.location.href = "LogInProject.html";
        } else {
            alert("Invalid email or password");
        }
    });
