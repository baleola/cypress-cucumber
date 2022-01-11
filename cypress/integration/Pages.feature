Feature: Validate Pages Links

    Scenario Outline: Should verify all links and image sources do not lead to a 4xx page - "<url>"
        Given I visit the "<url>" page
        Then All the links on the current page should be accessible
        And All the images on the current page should be accessible

        Examples:
            | url                                |
            | /standards/badpage                 |
            | /standards/webofdevices/multimodal |
            | /standards/webdesign/htmlcss       |

