import random

# Initialize variables
lower_bound = 1
upper_bound = 10
secret_number = random.randint(lower_bound, upper_bound)
guess = 0

# Display instructions
print("Welcome to the Higher/Lower Game!")
print(f"I'm thinking of a number between {lower_bound} and {upper_bound}")

# Input validation for lower_bound
while True:
    try:
        lower_bound = int(input("Enter the lower bound: "))
        if lower_bound < upper_bound:
            break
        else:
            print("The lower bound must be less than the upper bound.")
    except ValueError:
        print("Please enter a valid integer.")

# Input validation for upper_bound
while True:
    try:
        upper_bound = int(input("Enter the upper bound: "))
        if upper_bound > lower_bound:
            break
        else:
            print("The upper bound must be greater than the lower bound.")
    except ValueError:
        print("Please enter a valid integer.")

# Main game loop
while guess != secret_number:
    # Generate a random number within the bounds
    secret_number = random.randint(lower_bound, upper_bound)

    # Input validation for guess
    while True:
        try:
            guess = int(input(f"Guess the number between {lower_bound} and {upper_bound}: "))
            if lower_bound <= guess <= upper_bound:
                break
            else:
                print("Please enter a valid guess within the bounds.")
        except ValueError:
            print("Please enter a valid integer.")

    # Check the guess and provide feedback
    if guess < secret_number:
        print("Too low! Try a higher number.")
    elif guess > secret_number:
        print("Too high! Try a lower number.")
    else:
        print("Congratulations! You guessed the right number!")

print("Thanks for playing!")
