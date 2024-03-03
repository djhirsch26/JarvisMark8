import vertexai
from vertexai.language_models import TextGenerationModel

SAMPLE_PROMPT = '''
Output the alphabetically first word in input? Exclude words with less than four characters.

Input: Samuel is the oldest brother
Output: brother

Input: San Francisco city is a nice neighborhood
Output: city

Input: Daniel is testing out different LLMs. All are cool
Output: Cool

Input: A long time ago in a galaxy far far beneath
Output: beneath

Input: I have a pocket full of sunshine
Output: full

Input: This is the story of a girl
'''

PROJECT_ID = "jarvis-503c9"
LOCATION = "us-central1"

CLASSIFY_PROMPT = '''
Classify the request as one of the following
MUSIC, DIRECTIONS, INFORMATION, FOOD, OTHER.
Examples:

Request: Play wake me up
Classification: MUSIC

Request: Take me home
Classification: DIRECTIONS

Request: What happened today:
Classification: NEWS

Request: Play big bootie mix 11
'''

#############################

SELECTED_PROMPT = CLASSIFY_PROMPT


def interview() -> str:
    """Ideation example with a Large Language Model"""

    vertexai.init(project=PROJECT_ID, location=LOCATION)
    # TODO developer - override these parameters as needed:
    parameters = {
        # Temperature controls the degree of randomness in token selection.
        "temperature": 0.2,
        # Token limit determines the maximum amount of text output.
        "max_output_tokens": 1,
        # Tokens are selected from most probable to least until the sum of their probabilities equals the top_p value.
        "top_p": 1,
        # A top_k of 1 means the selected token is the most probable among all tokens.
        "top_k": 5,
    }

    model = TextGenerationModel.from_pretrained("text-bison@002")
    response = model.predict(
        SELECTED_PROMPT,
        **parameters,
    )
    print(f"Response from Model: {response.text}")

    return response.text


print("Starting LLM Inference")
interview()
print("Finishing LLM Inference")
